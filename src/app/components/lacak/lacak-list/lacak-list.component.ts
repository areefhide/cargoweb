import { Component, OnInit } from '@angular/core';
import {ItemContent} from '../../../class/item-content';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lacak-list',
  templateUrl: './lacak-list.component.html',
  styleUrls: ['./lacak-list.component.css']
})
export class LacakListComponent implements OnInit {
  pakets: any[];
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) { }

  ngOnInit() {
  }

  private loadAllData(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'paket')
    .map(data=>{
      return data.data;
    }).subscribe(
      data=>{
        this.pakets = data.docs;
        console.log(this.pakets);
      }
    );
  }

}
