import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRegisterMobilePage } from './login-register-mobile.page';



const routes: Routes = [
  { path: '', component: LoginRegisterMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterMobileRoutingModule { }
