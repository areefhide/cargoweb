import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import { Data } from '../../../class/data';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer: any[];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loadAllCustomer();
  }

  private loadAllCustomer(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'customer')
    .map(data=>{
      return data.data;
    }).subscribe(
      data=>{
        this.customer = data.docs;
      }
    );
  }

  deleteCustomer(id: string){
    this.http.delete(AppSettings.API_ENDPOINT +'customer/'+ id)
    .map(data=> {
      return data;
    }).subscribe(
      data=>{
        this.loadAllCustomer();
      }
    );
  }

}
