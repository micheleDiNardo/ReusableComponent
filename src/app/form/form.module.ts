import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from "./form.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "../button/button.module";

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule
],
    exports: [
        FormComponent

    ]
  })
  export class FormModule { }