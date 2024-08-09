import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { CommonModule } from "@angular/common";
import { CompanyComponent } from "../company/company.component";
import { ButtonModule } from "../button/button.module";
import { FormCompanyModule } from "../form-company/form-company.module";

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
    CommonModule,
    ButtonModule,
    FormCompanyModule
],
    exports: [
        CardComponent
    ]
  })
  export class CardModule { }