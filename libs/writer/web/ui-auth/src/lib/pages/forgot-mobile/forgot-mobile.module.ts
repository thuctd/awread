import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotMobileRoutingModule } from './forgot-mobile-routing.module';
import { ForgotMobilePage } from './forgot-mobile.page';


@NgModule({
  declarations: [ForgotMobilePage],
  imports: [
    CommonModule,
    ForgotMobileRoutingModule
  ]
})
export class ForgotMobileModule { }
