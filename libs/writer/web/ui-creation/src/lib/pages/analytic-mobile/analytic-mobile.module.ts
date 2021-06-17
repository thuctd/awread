import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticMobileRoutingModule } from './analytic-mobile-routing.module';
import { AnalyticMobilePage } from './analytic-mobile.page';


@NgModule({
  declarations: [AnalyticMobilePage],
  imports: [
    CommonModule,
    AnalyticMobileRoutingModule
  ]
})
export class AnalyticMobileModule { }
