import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPasswordMobileRoutingModule } from './new-password-mobile-routing.module';
import { NewPasswordMobilePage } from './new-password-mobile.page';


@NgModule({
  declarations: [NewPasswordMobilePage],
  imports: [
    CommonModule,
    NewPasswordMobileRoutingModule
  ]
})
export class NewPasswordMobileModule { }
