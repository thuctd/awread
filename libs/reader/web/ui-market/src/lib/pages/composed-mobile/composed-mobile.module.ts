import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposedMobileRoutingModule } from './composed-mobile-routing.module';
import { ComposedMobilePage } from './composed-mobile.page';


@NgModule({
  declarations: [ComposedMobilePage],
  imports: [
    CommonModule,
    ComposedMobileRoutingModule
  ]
})
export class ComposedMobileModule { }
