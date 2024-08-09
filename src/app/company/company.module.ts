import { NgModule } from "@angular/core";
import { CompanyComponent } from "./company.component";
import { CommonModule } from "@angular/common";
import { CardModule } from "../card/card.module";

@NgModule({
    declarations: [
        CompanyComponent
    ],
    imports: [
    CommonModule,
    CardModule
],
    exports: [
        CompanyComponent
    ]
  })
  export class CompanyModule { }