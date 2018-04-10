import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import {ResponseCreate} from '../../../class/response-create';
import {User} from '../../../class/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User = new User();
  roles: string[] =  ['admin', 'kurir','agen'];
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) {

   }

  ngOnInit() {
  }
  create(){
    this.http.post<ResponseCreate>(AppSettings.API_ENDPOINT + 'users',
    {username: this.user.username, password: this.user.password,role: this.user.role, isActive: true})
    .map(data=>{
      return data;
    }).subscribe(
      data =>{
        this.router.navigate(['/UserList']);
      }
    );
  }

}
