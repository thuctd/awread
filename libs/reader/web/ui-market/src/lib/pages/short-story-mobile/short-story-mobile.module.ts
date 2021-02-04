import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortStoryMobileRoutingModule } from './short-story-mobile-routing.module';
import { ShortStoryMobilePage } from './short-story-mobile.page';


@NgModule({
  declarations: [ShortStoryMobilePage],
  imports: [
    CommonModule,
    ShortStoryMobileRoutingModule
  ]
})
export class ShortStoryMobileModule { }
