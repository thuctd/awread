import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMobileRoutingModule } from './search-mobile-routing.module';
import { SearchMobilePage } from './search-mobile.page';


@NgModule({
  declarations: [SearchMobilePage],
  imports: [
    CommonModule,
    SearchMobileRoutingModule
  ]
})
export class SearchMobileModule { }
