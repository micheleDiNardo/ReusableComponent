import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { CommonModule } from "@angular/common";
import { TableModule } from "../../table/table.module";

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
    CommonModule,
    TableModule
],
    exports: [
        UserComponent
    ]
  })
  export class UserModule { }