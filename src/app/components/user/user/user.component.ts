import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import {ResponseCreate} from '../../../class/response-create';
import {User} from '../../../class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  password: string = "";
  user: User = new User();
  roles: string[] =  ['admin', 'kurir','agen'];
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) { 
    this.route.params.subscribe(params=>{
      this.id = params['id']; 
      this.getUser();     
    });
  }

  ngOnInit() {
  }

  private getUser(){
    this.http.get<ResponseCreate>(AppSettings.API_ENDPOINT + 'users/' + this.id)
    .map(data=>{
      return data.data;
    }).subscribe(data=>{
      this.user = data as User;      
      console.log(data);
    })
  }

  update(){
    this.http.put<ResponseCreate>(AppSettings.API_ENDPOINT + 'users/' + this.id,{password: this.password,role: this.user.role})
    .map(data=>{
      return data.data;
    }).subscribe(
      data=>{
        this.router.navigate(['/UserList']);
        console.log(data);
      }
    )
  }

}
