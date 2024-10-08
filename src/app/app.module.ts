import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { CommonModule } from '@angular/common';
import { TableModule } from './table/table.module';
import { UserModule } from "./users/user/user.module";
import { CompanyModule } from './company/company.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './authorization/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { UserApiModule } from './user-api/user-api.module';
import { UserApiDetailModule } from './user-api/user-api-detail/user-api-detail.module';
import { FormUserApiModule } from './user-api/form-user-api/form-user-api.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TableModule,
    UserModule,
    CompanyModule,
    NavBarModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    UserApiModule,
    UserApiDetailModule,
    FormUserApiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
