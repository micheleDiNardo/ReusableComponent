import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { CommonModule } from '@angular/common';
import { TableModule } from './table/table.module';
import { UserModule } from "./users/user/user.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TableModule,
    UserModule
],
  bootstrap: [AppComponent]
})
export class AppModule { }
