import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Auth} from './auth';
import { AppSettings } from '../class/app-settings';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: String, password: String){
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'login',{username:username, password: password })
    .map(Auth => {
      if(Auth && Auth.token){
        localStorage.setItem('token',Auth.token);
        return Auth;
      }
    });
  }
  logout(){
    localStorage.removeItem('token');
  }

}
