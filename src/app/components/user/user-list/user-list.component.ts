import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[];
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) {
    this.loadAllUser();
   }

  ngOnInit() {
  }

  private loadAllUser(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'users')
    .map(data=>{
      return data.data;
    })
    .subscribe(data=>{
      this.users = data.docs;
      console.log(this.users);
    })
  }

  editUser(id){
    this.router.navigate(['User',id]);
  }

}
