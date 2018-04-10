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
  selector: 'app-edit-kurir',
  templateUrl: './edit-kurir.component.html',
  styleUrls: ['./edit-kurir.component.css']
})
export class EditKurirComponent implements OnInit {
  agen: any[];
  kurir: Kurir;
  id: string;
  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient) { 
    this.route.params.subscribe(params=>{
      this.id = params['id']; 
      this.getKurir();
    });
  }
  private loadAllAgen(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'mitra?limit=1000')
    .map(data=>{
      return data.data;
    }).subscribe(data =>{
      this.agen = data.docs;
    });
  }

  ngOnInit() {
    this.loadAllAgen();
  }

  private getKurir(){
    this.http.get<ResponseCreate>(AppSettings.API_ENDPOINT + 'kurir/' + this.id + '/id')
    .map(data=>{
      return data.data;
    }).subscribe(data=>{
      this.kurir = data as Kurir;
      console.log(this.kurir);
    });
  }

  update(){
    this.http.put<ResponseCreate>(AppSettings.API_ENDPOINT + 'kurir/' + this.id,this.kurir)
    .map(data=>{
      return data.data;
    }).subscribe(data=>{
      this.router.navigate(['/KurirList']);
    })
  }

}
