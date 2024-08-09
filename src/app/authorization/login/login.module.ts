import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "../../button/button.module";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
],
    exports: [
        LoginComponent
    ]
  })
  export class LoginModule { }