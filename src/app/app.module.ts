import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from './auth/auth.guard';
import { AuthService} from './auth/auth.service';
import {CompanyService} from './services/company.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanyListComponent } from './components/company/company-list/company-list.component';
import { CompanyComponent } from './components/company/company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProjectListComponent,
    DashboardComponent,
    CompanyListComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard,CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
