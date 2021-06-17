import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticDesktopRoutingModule } from './analytic-desktop-routing.module';
import { AnalyticDesktopPage } from './analytic-desktop.page';


@NgModule({
  declarations: [AnalyticDesktopPage],
  imports: [
    CommonModule,
    AnalyticDesktopRoutingModule
  ]
})
export class AnalyticDesktopModule { }
