import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from "./form.component";
import { CommonModule } from "@angular/common";
import { UserModule } from "../button/button.module";

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    UserModule
],
    exports: [
        FormComponent

    ]
  })
  export class FormModule { }