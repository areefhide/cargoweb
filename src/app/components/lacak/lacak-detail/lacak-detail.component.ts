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

    },
    history:[

    ]
  };
  item: Paket;
  status: string[] = ['Diterima Cargo','Dikirim ke Agen','Diterima Agen'];
  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient) {
    this.route.params.subscribe(params=>{
      this.id = params['id'];      
      this,this.getPaket();
      this.item = new Paket();
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
        this.item = data as Paket;
        console.log(this.paket);            
      }
    );
  }
  next(){
    var idx = this.status.indexOf(this.item.status.toString());
    if(idx <2){
      var status = this.status[idx+1];
      this.http.put<ResponseCreate>(AppSettings.API_ENDPOINT + 'paket/' + this.id + '/status',{status: status})
        .map(data=>{
          return data.data;
        }).subscribe(data=>{
          this.getPaket();
        });
    }   
  }
  exit(){
    this.router.navigate(['/Lacak']);
  }

}
