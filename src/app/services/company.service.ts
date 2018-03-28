import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }
  create(companyName: string){
    
  }

}
