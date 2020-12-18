import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterDesktopRoutingModule } from './login-register-desktop-routing.module';
import { LoginRegisterDesktopPage } from './login-register-desktop.page';


@NgModule({
  declarations: [LoginRegisterDesktopPage],
  imports: [
    CommonModule,
    LoginRegisterDesktopRoutingModule
  ]
})
export class LoginRegisterDesktopModule { }
