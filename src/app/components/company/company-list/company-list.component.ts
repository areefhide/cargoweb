import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  company : any[] = [];
  constructor(private comserv: CompanyService,private router: Router) { }

  ngOnInit() {
    this.loadCompany();
  }

  private loadCompany(){
    this.comserv.get().subscribe(data=>{
      this.company = data;
    });
  }
}
