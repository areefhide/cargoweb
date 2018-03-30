import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../class/app-settings';
import { ResponseData } from '../class/response';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'project')
    .map(resp =>{
      return resp.data;
    });
  }

}
