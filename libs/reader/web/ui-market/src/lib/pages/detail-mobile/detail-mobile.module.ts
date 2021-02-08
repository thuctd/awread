import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMobileRoutingModule } from './detail-mobile-routing.module';
import { DetailMobilePage } from './detail-mobile.page';


@NgModule({
  declarations: [DetailMobilePage],
  imports: [
    CommonModule,
    DetailMobileRoutingModule
  ]
})
export class DetailMobileModule { }
