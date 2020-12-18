import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRegisterDesktopPage } from './login-register-desktop.page';



const routes: Routes = [
  { path: '', component: LoginRegisterDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterDesktopRoutingModule { }
