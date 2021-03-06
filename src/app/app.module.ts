import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {AuthInterceptor} from './auth/auth-interceptor';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from './auth/auth.guard';
import { AuthService} from './auth/auth.service';
import {CompanyService} from './services/company.service';
import {ProjectService} from './services/project.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanyListComponent } from './components/company/company-list/company-list.component';
import { CompanyComponent } from './components/company/company/company.component';
import { AgentListComponent } from './components/agent/agent-list/agent-list.component';
import { AgentComponent } from './components/agent/agent/agent.component';
import { KurirListComponent } from './components/kurir/kurir-list/kurir-list.component';
import { KurirComponent } from './components/kurir/kurir/kurir.component';
import { AppSettingsComponent } from './class/app-settings/app-settings.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { PengirimanListComponent } from './components/pengiriman/pengiriman-list/pengiriman-list.component';
import { PengirimanComponent } from './components/pengiriman/pengiriman/pengiriman.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { PrintComponent } from './components/pengiriman/print/print.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserComponent } from './components/user/user/user.component';
import { LacakListComponent } from './components/lacak/lacak-list/lacak-list.component';
import { AdminComponent } from './components/user/admin/admin.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { EditKurirComponent } from './components/kurir/edit-kurir/edit-kurir.component';
import { EditAgentComponent } from './components/agent/edit-agent/edit-agent.component';
import { LacakDetailComponent } from './components/lacak/lacak-detail/lacak-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProjectListComponent,
    DashboardComponent,
    CompanyListComponent,
    CompanyComponent,
    AgentListComponent,
    AgentComponent,
    KurirListComponent,
    KurirComponent,
    AppSettingsComponent,
    ProjectComponent,
    PengirimanListComponent,
    PengirimanComponent,
    CustomerComponent,
    CustomerListComponent,
    PrintComponent,
    UserListComponent,
    UserComponent,
    LacakListComponent,
    AdminComponent,
    CustomerEditComponent,
    EditKurirComponent,
    EditAgentComponent,
    LacakDetailComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularMultiSelectModule,
    NgxPaginationModule
  ],
  providers: [
    AuthService,AuthGuard,CompanyService,
    ProjectService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
