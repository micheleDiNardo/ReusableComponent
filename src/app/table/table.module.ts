import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import { CommonModule } from "@angular/common";
import { FormModule } from "../form/form.module";
import { ButtonModule } from "../button/button.module";

@NgModule({
    declarations: [
      TableComponent
    ],
    imports: [
    CommonModule,
    ButtonModule,
    FormModule
],
    exports: [
        TableComponent
    ]
  })
  export class TableModule { }
  