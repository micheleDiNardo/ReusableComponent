import { NgModule } from "@angular/core";
import { FormUserApiComponent } from "./form-user-api.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "../../button/button.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        FormUserApiComponent
    ],
    imports: [
    CommonModule,
    BrowserModule,
    ButtonModule,
    ReactiveFormsModule
],
    exports: [
        FormUserApiComponent
    ]
  })
  export class FormUserApiModule { }