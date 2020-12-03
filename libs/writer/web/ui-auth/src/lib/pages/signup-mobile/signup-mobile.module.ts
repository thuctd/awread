import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupMobileRoutingModule } from './signup-mobile-routing.module';
import { SignupMobilePage } from './signup-mobile.page';

@NgModule({
  declarations: [SignupMobilePage],
  imports: [CommonModule, SignupMobileRoutingModule],
})
export class SignupMobileModule {}
