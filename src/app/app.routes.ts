import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { CompanyComponent } from './company/company.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './authorization/login/login.component';
import { AuthGuard } from './authorization/AuthGuard';

export const routes: Routes = [
    { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'companies', component: CompanyComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/login' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
