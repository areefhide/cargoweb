import { Component, OnInit } from '@angular/core';
import {Data} from '../../../class/data';
import {ProjectService} from '../../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  data: any[];
  constructor(private projectserv: ProjectService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(){
    this.projectserv.get().subscribe(data=>{
      this.data = data.docs; 
      console.log(this.data);
    });
  }

  private delete(id: string){
    
  }

}
