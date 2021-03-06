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
import {PrintComponent} from './components/pengiriman/print/print.component';
//mitra
import {AgentListComponent} from './components/agent/agent-list/agent-list.component';
import {AgentComponent} from './components/agent/agent/agent.component';
import { EditAgentComponent } from './components/agent/edit-agent/edit-agent.component';
//customer
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
//kurir
import {KurirComponent} from './components/kurir/kurir/kurir.component';
import {KurirListComponent} from './components/kurir/kurir-list/kurir-list.component';
import { EditKurirComponent } from './components/kurir/edit-kurir/edit-kurir.component';
//user
import { UserComponent} from './components/user/user/user.component';
import {UserListComponent } from './components/user/user-list/user-list.component';
import {AdminComponent} from './components/user/admin/admin.component';
//lacak
import {LacakListComponent} from './components/lacak/lacak-list/lacak-list.component';
import { LacakDetailComponent } from './components/lacak/lacak-detail/lacak-detail.component';

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
      {path: 'Mitra/:id',component: EditAgentComponent},
      {path: 'MitraList', component: AgentListComponent},
      {path: 'Customer', component: CustomerComponent},
      {path: 'Customer/:id', component: CustomerEditComponent},
      {path: 'CustomerList',component: CustomerListComponent},
      {path: 'Kurir', component: KurirComponent},
      {path: 'Kurir/:id',component:EditKurirComponent},
      {path: 'KurirList',component: KurirListComponent},
      {path: 'User', component: AdminComponent},
      {path: 'User/:id', component: UserComponent},
      {path: 'UserList', component: UserListComponent},
      {path: 'Lacak', component: LacakListComponent},
      {path: 'Lacak/:id', component: LacakDetailComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'PaketPrint/:id',component: PrintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
