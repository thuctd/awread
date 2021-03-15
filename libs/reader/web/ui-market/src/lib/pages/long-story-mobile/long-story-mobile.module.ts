import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LongStoryMobileRoutingModule } from './long-story-mobile-routing.module';
import { LongStoryMobilePage } from './long-story-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [LongStoryMobilePage],
  imports: [
    CommonModule,
    LongStoryMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class LongStoryMobileModule { }
