import { Component, OnInit } from '@angular/core';
import {ItemContent} from '../../../class/item-content';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import { DatePipe } from '@angular/common';
import { ResponseCreate } from '../../../class/response-create';

@Component({
  selector: 'app-pengiriman-list',
  templateUrl: './pengiriman-list.component.html',
  styleUrls: ['./pengiriman-list.component.css']
})
export class PengirimanListComponent implements OnInit {

  pakets: any[];
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.loadAllData();
  }

  private loadAllData(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'paket')
    .map(data=>{
      return data.data;
    }).subscribe(
      data=>{
        this.pakets = data.docs;
        console.log(this.pakets);
      }
    );
  }
  print(id: string){
    this.router.navigate(['PaketPrint',id]);
  }

  delete(id: string){
    this.http.delete<ResponseCreate>(AppSettings.API_ENDPOINT + 'paket/'+ id)
    .map(data=>{
      return data.data;
    }).subscribe(
      data=>{
        this.loadAllData();
      }
    );
  }
}
