import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import {Agent} from '../../../class/agent';
import {User} from '../../../class/user';
import { Data } from '../../../class/data';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  mitra : any[];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loadAllAgent();
  }

  private loadAllAgent(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'mitra')
    .map(data=>{
      return data.data;
    }).subscribe(data=>{
      this.mitra = data.docs;
    });
  }

}
