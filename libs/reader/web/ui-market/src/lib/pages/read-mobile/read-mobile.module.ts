import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadMobileRoutingModule } from './read-mobile-routing.module';
import { ReadMobilePage } from './read-mobile.page';


@NgModule({
  declarations: [ReadMobilePage],
  imports: [
    CommonModule,
    ReadMobileRoutingModule
  ]
})
export class ReadMobileModule { }
