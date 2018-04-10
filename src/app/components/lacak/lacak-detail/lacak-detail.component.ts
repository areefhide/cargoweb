import { Component, OnInit } from '@angular/core';
import {ItemContent} from '../../../class/item-content';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import {Agent} from '../../../class/agent';
import {Paket} from '../../../class/paket';
import { ResponseCreate } from '../../../class/response-create';

@Component({
  selector: 'app-lacak-detail',
  templateUrl: './lacak-detail.component.html',
  styleUrls: ['./lacak-detail.component.css']
})
export class LacakDetailComponent implements OnInit {

  id: string;
  paket: any = {
    pengirim: {

    },
    penerima:{
      
    }
  };
  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient) {
    this.route.params.subscribe(params=>{
      this.id = params['id'];      
      this,this.getPaket();
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

}
