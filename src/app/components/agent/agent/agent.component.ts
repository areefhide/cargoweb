import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import {Agent} from '../../../class/agent';
import {ResponseCreate} from '../../../class/response-create';
import {User} from '../../../class/user';
import { Data } from '../../../class/data';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  cities: any[];
  mitra: Agent = new Agent();
  username: string = "";
  password: string = "";  
  user: User;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getKota();
  }

  private getKota(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'kota?limit=100')
    .map(data=>{
      return data.data.docs;
    }).subscribe(doc=>{
      this.cities = doc;
      console.log(this.cities);
    });
  }

  private create(){
    console.log(this.mitra);
    this.createUser();
  }

  private createUser(){
    this.http.post<ResponseCreate>(AppSettings.API_ENDPOINT + 'login/register',{username: this.username,password: this.password})
    .map(data=>{
      return data;
    }).subscribe(data=> {
      if(data.status == 200){
        this.user = data.data as User;
        this.mitra.userid = this.user._id;
        console.log(this.user);
        this.createMitra();
      }else{
      }
    });
  }

  private createMitra(){
    this.http.post<ResponseCreate>(AppSettings.API_ENDPOINT + 'mitra',this.mitra).map(data=>{
      return data;
    },error=>{
      return error;
    }).subscribe(data=>
    {
      this.router.navigate(['/MitraList']);
    });
  }

}
