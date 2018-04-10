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
  paket: any = {
    pengirim: {

    },
    penerima:{
      
    }
  };
  detail : any;

  today = Date.now();
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) { 
    this.route.params.subscribe(params=>{
      this.id = params['id'];      
      this.getPaket();
      this.getDetails();
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
        console.log(this.paket);            
      }
    );
  }
  private getDetails(){
    this.http.get<ResponseCreate>(AppSettings.API_ENDPOINT + 'paket/' + this.id +'/detail')
    .map(data=>{
      return data;
    }).subscribe(
      data=> {        
        this.detail = data.data;    
        console.log(this.detail);            
      }
    );
  }
  print(){
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" href="http://20.184.10.63:3000/bower_components/bootstrap/dist/css/bootstrap.min.css"> 
          <link rel="stylesheet" href="http://20.184.10.63:3000/bower_components/font-awesome/css/font-awesome.min.css">
    
          <link rel="stylesheet" href="http://20.184.10.63:3000/bower_components/Ionicons/css/ionicons.min.css">
  
          <link rel="stylesheet" href="http://20.184.10.63:3000/dist/css/AdminLTE.min.css">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}

 