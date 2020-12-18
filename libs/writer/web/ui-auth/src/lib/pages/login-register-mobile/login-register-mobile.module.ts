import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterMobileRoutingModule } from './login-register-mobile-routing.module';
import { LoginRegisterMobilePage } from './login-register-mobile.page';


@NgModule({
  declarations: [LoginRegisterMobilePage],
  imports: [
    CommonModule,
    LoginRegisterMobileRoutingModule
  ]
})
export class LoginRegisterMobileModule { }
