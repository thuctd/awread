import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailTocMobileRoutingModule } from './detail-toc-mobile-routing.module';
import { DetailTocMobilePage } from './detail-toc-mobile.page';


@NgModule({
  declarations: [DetailTocMobilePage],
  imports: [
    CommonModule,
    DetailTocMobileRoutingModule
  ]
})
export class DetailTocMobileModule { }
