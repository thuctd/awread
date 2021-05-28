import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailBookMobileRoutingModule } from './detail-book-mobile-routing.module';
import { DetailBookMobilePage } from './detail-book-mobile.page';


@NgModule({
  declarations: [DetailBookMobilePage],
  imports: [
    CommonModule,
    DetailBookMobileRoutingModule
  ]
})
export class DetailBookMobileModule { }
