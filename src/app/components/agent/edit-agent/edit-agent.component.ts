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
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.css']
})
export class EditAgentComponent implements OnInit {
  id: string;
  cities: any[];
  mitra: Agent = new Agent();
  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient) { 
   
  }

  ngOnInit() {
    this.getKota();
    this.route.params.subscribe(params=>{
      this.id = params['id']; 
      this.getAgent();
    });
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

  private getAgent(){
    this.http.get<ResponseCreate>(AppSettings.API_ENDPOINT + 'mitra/' + this.id + '/id')
    .map(data=>{
      return data.data;
    }).subscribe(
      data=>{
        this.mitra = data as Agent;
        console.log(this.mitra);
      }
    );
  }
  update(){
    this.http.put<ResponseCreate>(AppSettings.API_ENDPOINT + 'mitra/' + this.id,this.mitra)
    .map(data=>{
      return data.data;
    }).subscribe(data=>{
      this.router.navigate(['/MitraList'])
    })
  }
}
