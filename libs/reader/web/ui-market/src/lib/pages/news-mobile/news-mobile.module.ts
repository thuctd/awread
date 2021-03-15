import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsMobileRoutingModule } from './news-mobile-routing.module';
import { NewsMobilePage } from './news-mobile.page';


@NgModule({
  declarations: [NewsMobilePage],
  imports: [
    CommonModule,
    NewsMobileRoutingModule
  ]
})
export class NewsMobileModule { }
