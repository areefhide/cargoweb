import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../../services/company.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  CompanyName: string = '';
  constructor(private comserv: CompanyService,private router: Router) { }

  ngOnInit() {
  }

  create(){
    this.comserv.create(this.CompanyName).subscribe(
      data=>{
        this.router.navigate(['/Companylist']);
      },
      error =>{

      }
    );
  }
}
