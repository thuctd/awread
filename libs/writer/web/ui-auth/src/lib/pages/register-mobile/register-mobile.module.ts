import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterMobileRoutingModule } from './register-mobile-routing.module';
import { RegisterMobilePage } from './register-mobile.page';

@NgModule({
  declarations: [RegisterMobilePage],
  imports: [CommonModule, RegisterMobileRoutingModule],
})
export class RegisterMobileModule {}
