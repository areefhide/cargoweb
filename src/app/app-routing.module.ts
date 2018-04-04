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
import {ProjectComponent} from './components/projects/project/project.component';
//pengiriman
import {PengirimanComponent} from './components/pengiriman/pengiriman/pengiriman.component';
import {PengirimanListComponent} from './components/pengiriman/pengiriman-list/pengiriman-list.component';
//mitra
import {AgentListComponent} from './components/agent/agent-list/agent-list.component';
import {AgentComponent} from './components/agent/agent/agent.component';
//customer
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
//user
import {KurirComponent} from './components/kurir/kurir/kurir.component';
import {KurirListComponent} from './components/kurir/kurir-list/kurir-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent,canActivate:[AuthGuard],canActivateChild: [AuthGuard],
    children:[
      {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'Companylist', component:CompanyListComponent},
      {path:'Company', component:CompanyComponent},
      {path: 'ProjectList',component:ProjectListComponent},
      {path:'Project',component:ProjectComponent},
      {path: 'Pengiriman',component:PengirimanComponent},
      {path:'PengirimanList',component:PengirimanListComponent},
      {path: 'Mitra', component: AgentComponent},
      {path: 'MitraList', component: AgentListComponent},
      {path: 'Customer', component: CustomerComponent},
      {path: 'CustomerList',component: CustomerListComponent},
      {path: 'Kurir', component: KurirComponent},
      {path: 'KurirList',component: KurirListComponent}
    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
