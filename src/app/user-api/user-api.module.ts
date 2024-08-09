import { NgModule } from "@angular/core";
import { UserApiComponent } from "./user-api.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "../button/button.module";
import { FormUserApiModule } from "./form-user-api/form-user-api.module";

@NgModule({
    declarations: [
        UserApiComponent
    ],
    imports: [
    CommonModule,
    BrowserModule,
    ButtonModule,
    FormUserApiModule
],
    exports: [
        UserApiComponent
    ]
  })
  export class UserApiModule { }