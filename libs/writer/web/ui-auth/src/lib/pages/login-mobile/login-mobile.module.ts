import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMobileRoutingModule } from './login-mobile-routing.module';
import { LoginMobilePage } from './login-mobile.page';

@NgModule({
  declarations: [LoginMobilePage],
  imports: [CommonModule, LoginMobileRoutingModule],
})
export class LoginMobileModule {}
