import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import {Kurir} from '../../../class/kurir';
import {ResponseCreate} from '../../../class/response-create';
import {User} from '../../../class/user';

@Component({
  selector: 'app-kurir',
  templateUrl: './kurir.component.html',
  styleUrls: ['./kurir.component.css']
})
export class KurirComponent implements OnInit {

  agen: any[];
  kurir: Kurir;
  username: string = "";
  password: string = "";
  user: User;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.kurir = new Kurir;
    this.loadAllAgen();
  }

  private loadAllAgen(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'mitra?limit=1000')
    .map(data=>{
      return data.data;
    }).subscribe(data =>{
      this.agen = data.docs;
    });
  }

  create(){
    this.createUser()
  }

  private createUser(){
    this.http.post<ResponseCreate>(AppSettings.API_ENDPOINT +'login/register',{username: this.username, password: this.password, role: 'kurir'})
    .map(data=>{
      return data;
    }).subscribe(data=>{
      this.user = data.data as User;
      this.kurir.username = this.user.username;
      this.createKurir();
    });
  }

  private createKurir(){
    this.http.post<ResponseCreate>(AppSettings.API_ENDPOINT + 'kurir', this.kurir)
    .map(data=>{
      return data;
    }).subscribe(
      data=>{
        this.router.navigate(['/KurirList']);
      }
    )
  }

}
