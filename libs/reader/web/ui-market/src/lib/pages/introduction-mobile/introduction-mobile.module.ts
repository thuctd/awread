import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionMobileRoutingModule } from './introduction-mobile-routing.module';
import { IntroductionMobilePage } from './introduction-mobile.page';


@NgModule({
  declarations: [IntroductionMobilePage],
  imports: [
    CommonModule,
    IntroductionMobileRoutingModule
  ]
})
export class IntroductionMobileModule { }
