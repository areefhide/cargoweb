import { Component, OnInit } from '@angular/core';
import {ItemContent} from '../../../class/item-content';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import {Agent} from '../../../class/agent';
import {Paket} from '../../../class/paket';
import { ResponseCreate } from '../../../class/response-create';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  id: string;
  paket: any = {};
  today = Date.now();
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) { 
    this.route.params.subscribe(params=>{
      this.id = params['id'];      
      this.getPaket();
    });
  }

  ngOnInit() {
    
  }
  private getPaket(){
    this.http.get<ResponseCreate>(AppSettings.API_ENDPOINT + 'paket/' + this.id +'/id')
    .map(data=>{
      return data.data;
    }).subscribe(
      data=> {        
        this.paket = data;                
      }
    );
  }
  private getDetails(){
    
  }
}
