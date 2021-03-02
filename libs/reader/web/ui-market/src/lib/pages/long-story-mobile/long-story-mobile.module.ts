import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LongStoryMobileRoutingModule } from './long-story-mobile-routing.module';
import { LongStoryMobilePage } from './long-story-mobile.page';


@NgModule({
  declarations: [LongStoryMobilePage],
  imports: [
    CommonModule,
    LongStoryMobileRoutingModule
  ]
})
export class LongStoryMobileModule { }
