import { NgModule } from "@angular/core";
import { UserApiDetailComponent } from "./user-api-detail.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "../../button/button.module";

@NgModule({
    declarations: [
        UserApiDetailComponent
    ],
    imports: [
    CommonModule,
    BrowserModule,
    ButtonModule
],
    exports: [
        UserApiDetailComponent
    ]
  })
  export class UserApiDetailModule { }