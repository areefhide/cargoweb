import { Component, OnInit } from '@angular/core';
import {ItemContent} from '../../../class/item-content';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import {Agent} from '../../../class/agent';

@Component({
  selector: 'app-pengiriman',
  templateUrl: './pengiriman.component.html',
  styleUrls: ['./pengiriman.component.css']
})
export class PengirimanComponent implements OnInit {
  cities: any[];
  mitra : any[];
  item : ItemContent;
  items: ItemContent[] = [];
  constructor(private router: Router, private http: HttpClient) { 
    this.item = new ItemContent();
    this.items;
  }

  ngOnInit() {
    this.getCities();
    this.getallAgent();
  }

  addItem(){
    this.items.push(this.item);
    this.item = new ItemContent();
  }
  removeItem(idx: number){
    this.items.splice(idx,1);
  }

  getCities(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'kota?limit=100')
    .map(data=>{
      return data.data.docs;
    }).subscribe(
      data=>{
        this.cities = data;
        console.log(this.cities);
      }
    );
  }

  getallAgent(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'mitra?limit=500')
    .map(data=>{
      return data.data.docs;
    }).subscribe(
      data => {
        this.mitra = data;
        console.log(this.mitra);
      }
    )
  }

  back(){
    this.router.navigate(['/PengirimanList']);
  }
  

}
