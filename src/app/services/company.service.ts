import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../class/app-settings';
import { ResponseData } from '../class/response';
import { CompanyResult } from '../components/company/company-result';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }
  create(companyName: string){
     return this.http.post<any>(AppSettings.API_ENDPOINT + 'company',{nama: companyName})
     .map(data =>{
       return data;
     });
  }
  get(){
    return this.http.get<CompanyResult>(AppSettings.API_ENDPOINT + 'company')
    .map(data =>{
      return data.data.docs;
    });
  }

  delete(id: string){
    return this.http.delete<any>(AppSettings.API_ENDPOINT + 'company/' + id)
    .map(data=>{
      return data;
    });
  }

}
