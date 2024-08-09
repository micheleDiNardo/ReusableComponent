import { NgModule } from "@angular/core";
import { NavBarComponent } from "./nav-bar.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "../app.routes";
import { ButtonModule } from "../button/button.module";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
    CommonModule,
    RouterOutlet,
    AppRoutingModule,
    ButtonModule
],
    exports: [
        NavBarComponent
    ]
  })
  export class NavBarModule { }