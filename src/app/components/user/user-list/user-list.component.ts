import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import { ResponseCreate } from '../../../class/response-create';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[];
  page: Number = 1;
  maxPage:Number = 10;
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) {
    this.loadAllUser();
   }

  ngOnInit() {
  }

  private loadAllUser(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'users?page='+ this.page.toString())
    .map(data=>{
      return data.data;
    })
    .subscribe(data=>{
      
      this.users = data.docs;
      this.page = data.page;
      this.maxPage = data.pages;
      console.log(data);
    })
  }
  prev(){
    var page = (this.page > 1)? (this.page as number) -1: 1;
    this.page = page;
    this.loadAllUser();
  }
  next(){
    var page = (this.page < this.maxPage)? (this.page as number) +1: this.maxPage;
    this.page = page;
    this.loadAllUser();
  }

  editUser(id){
    console.log(id);
    this.router.navigate(['User',id]);
  }
  disableUser(id:string){
    console.log(id);
    this.http.put<ResponseCreate>(AppSettings.API_ENDPOINT + 'users/' + id + '/toggle',{isActive: false})
    .map(data=>{
      return data.data;
    }).subscribe(data=>{
      this.loadAllUser();
      console.log(data);
    });
  }

}
