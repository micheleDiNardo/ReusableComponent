import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { CompanyComponent } from './company/company.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './authorization/login/login.component';
import { AuthGuard } from './authorization/AuthGuard';
import { UserApiComponent } from './user-api/user-api.component';
import { UserApiDetailComponent } from './user-api/user-api-detail/user-api-detail.component';

export const routes: Routes = [
    { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'companies', component: CompanyComponent, canActivate: [AuthGuard] },
    { path: 'users-api', component: UserApiComponent, canActivate: [AuthGuard] },
    { path: 'users-api/:id', component: UserApiDetailComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/login' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
