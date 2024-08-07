import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import { CommonModule } from "@angular/common";
import { UserModule } from "../button/button.module";
import { FormModule } from "../form/form.module";

@NgModule({
    declarations: [
      TableComponent
    ],
    imports: [
    CommonModule,
    UserModule,
    FormModule
],
    exports: [
        TableComponent
    ]
  })
  export class TableModule { }
  