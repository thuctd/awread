import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovelMobileRoutingModule } from './novel-mobile-routing.module';
import { NovelMobilePage } from './novel-mobile.page';


@NgModule({
  declarations: [NovelMobilePage],
  imports: [
    CommonModule,
    NovelMobileRoutingModule
  ]
})
export class NovelMobileModule { }
