import { NgModule } from "@angular/core";
import { FormCompanyComponent } from "./form-company.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "../button/button.module";
import { FormComponent } from "../form/form.component";

@NgModule({
    declarations: [
        FormCompanyComponent
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule
],
    exports: [
        FormCompanyComponent

    ]
  })
  export class FormCompanyModule { }