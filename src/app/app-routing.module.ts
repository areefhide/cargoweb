import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from './auth/auth.guard';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
//company
import {CompanyListComponent} from './components/company/company-list/company-list.component';
import{ CompanyComponent} from './components/company/company/company.component';
//project
import {ProjectListComponent} from './components/projects/project-list/project-list.component';
//pengiriman
import {PengirimanComponent} from './components/pengiriman/pengiriman/pengiriman.component';
import {PengirimanListComponent} from './components/pengiriman/pengiriman-list/pengiriman-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent,canActivate:[AuthGuard],canActivateChild: [AuthGuard],
    children:[
      {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'Companylist', component:CompanyListComponent},
      {path:'Company', component:CompanyComponent},
      {path: 'ProjectList',component:ProjectListComponent},
      {path:'PengirimanList',component:PengirimanListComponent}
    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
