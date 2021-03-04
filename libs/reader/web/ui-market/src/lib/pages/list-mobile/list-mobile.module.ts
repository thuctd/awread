import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMobileRoutingModule } from './list-mobile-routing.module';
import { ListMobilePage } from './list-mobile.page';


@NgModule({
  declarations: [ListMobilePage],
  imports: [
    CommonModule,
    ListMobileRoutingModule
  ]
})
export class ListMobileModule { }
