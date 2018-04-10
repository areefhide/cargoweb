import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import { ResponseData } from '../../../class/response';
import { ResponseCreate } from '../../../class/response-create';

@Component({
  selector: 'app-kurir-list',
  templateUrl: './kurir-list.component.html',
  styleUrls: ['./kurir-list.component.css']
})
export class KurirListComponent implements OnInit {

  kurir: any[];
  page: Number = 1;
  maxPage:Number = 10;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loadAllData();
  }

  private loadAllData(){
    this.http.get<ResponseData>(AppSettings.API_ENDPOINT + 'kurir?page='+ this.page.toString())
    .map(data=>{
      return data.data;
    }).subscribe(data =>
    {
      this.kurir = data.docs;
      this.page = data.page;
      this.maxPage = data.pages;
      console.log(this.kurir);
    });
  }
  prev(){
    var page = (this.page > 1)? (this.page as number) -1: 1;
    this.page = page;
    this.loadAllData();
  }
  next(){
    var page = (this.page < this.maxPage)? (this.page as number) +1: this.maxPage;
    this.page = page;
    this.loadAllData();
  }

  editKurir(id: string){
    this.router.navigate(['Kurir',id]);
  }
  deleteKurir(id: string){
    this.http.delete<ResponseCreate>(AppSettings.API_ENDPOINT + 'kurir/' + id)
    .map(data=>{
      return data;
    }).subscribe(
      data=>{
        this.loadAllData();
      }
    )
  }
}
