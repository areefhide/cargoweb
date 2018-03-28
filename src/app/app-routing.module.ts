import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from './auth/auth.guard';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CompanyListComponent} from './components/company/company-list/company-list.component';
import{ CompanyComponent} from './components/company/company/company.component';

const routes: Routes = [
  {path: '', component: HomeComponent,canActivate:[AuthGuard],canActivateChild: [AuthGuard],
    children:[
      {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'Companylist', component:CompanyListComponent},
      {path:'Company', component:CompanyComponent}
    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
