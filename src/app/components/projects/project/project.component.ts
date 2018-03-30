import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../../class/app-settings';
import {Project} from '../../../class/project';
import{ Perusahaan }from '../../../class/perusahaan';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project = new Project();
  perusahaan : Perusahaan[];
  constructor(private http: HttpClient,private router: Router,
    private comserv: CompanyService) {     
  }

  ngOnInit() {
    this.getCompany();
  }

  private create(){
    this.http.post<any>(AppSettings.API_ENDPOINT + 'project',this.project)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['ProjectList']);
    });
  }

  private getCompany(){
    this.comserv.get().subscribe(data=>{  
      this.perusahaan = data;          
    });
  }
}
