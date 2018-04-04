import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';

@Component({
  selector: 'app-kurir-list',
  templateUrl: './kurir-list.component.html',
  styleUrls: ['./kurir-list.component.css']
})
export class KurirListComponent implements OnInit {

  kurir: any[];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loadAllData();
  }

  private loadAllData(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'kurir')
    .map(data=>{
      return data.data;
    }).subscribe(data =>
    {
      this.kurir = data.docs;
      console.log(this.kurir);
    });
  }
}
