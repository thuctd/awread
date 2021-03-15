import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDesktopRoutingModule } from './search-desktop-routing.module';
import { SearchDesktopPage } from './search-desktop.page';


@NgModule({
  declarations: [SearchDesktopPage],
  imports: [
    CommonModule,
    SearchDesktopRoutingModule
  ]
})
export class SearchDesktopModule { }
