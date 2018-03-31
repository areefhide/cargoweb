import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import {Customer} from '../../../class/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer : Customer;
  constructor(private router: Router, private http: HttpClient) {
    this.customer = new Customer();
   }

  ngOnInit() {
  }
  create(){
    this.http.post<ResponseData>(AppSettings.API_ENDPOINT + '',this.customer)
    .map(data=>{
      return data.data;
    }).subscribe(
      data =>{
        this.router.navigate(['/CustomerList']);
      }
    );
  }

}
