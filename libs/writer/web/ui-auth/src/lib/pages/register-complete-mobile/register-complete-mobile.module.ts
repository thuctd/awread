import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCompleteMobileRoutingModule } from './register-complete-mobile-routing.module';
import { RegisterCompleteMobilePage } from './register-complete-mobile.page';


@NgModule({
  declarations: [RegisterCompleteMobilePage],
  imports: [
    CommonModule,
    RegisterCompleteMobileRoutingModule
  ]
})
export class RegisterCompleteMobileModule { }
