import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import {Customer} from '../../../class/customer';
import {ResponseCreate} from '../../../class/response-create';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer : Customer;
  id: string;
  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient) { 
    this.customer = new Customer();
    this.route.params.subscribe(params=>{
      this.id = params['id']; 
      this.getCustomer();     
    });
  }

  ngOnInit() {
  }

  private getCustomer(){
    this.http.get<ResponseCreate>(AppSettings.API_ENDPOINT + 'customer/' + this.id + '/id')
    .map(data=>{
      return data.data;
    }).subscribe(data=>{
      this.customer = data as Customer;
      console.log(this.customer);
    })
  };

  update(){
    this.http.put<ResponseCreate>(AppSettings.API_ENDPOINT + 'customer/' + this.id,this.customer)
    .map(data=>{
      return data;
    }).subscribe(data=>{
      this.router.navigate(['/CustomerList']);
    })
  }
}
