import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../class/app-settings';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }
  create(companyName: string){
     return this.http.post<any>(AppSettings.API_ENDPOINT + '/company',{nama: companyName})
     .map(data =>{
       return data;
     });
  }
  get(){

  }

}
