import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import{ Perusahaan }from '../../../class/perusahaan';
import {CompanyService} from '../../../services/company.service';
import { CompanyResult } from '../company-result';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  company : Perusahaan[];
  constructor(private comserv: CompanyService,private router: Router) { }

  ngOnInit() {
    this.loadCompany();
    console.log(this.company);
  }

  private loadCompany(){
    this.comserv.get().subscribe(data=>{  
      this.company = data;    
      console.log(this.company);
    });
    
  }

  private deleteCompany(id: string){
    this.comserv.delete(id).subscribe(data =>{
      this.loadCompany();
    });
  }
}
