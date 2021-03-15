import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortStoryMobileRoutingModule } from './short-story-mobile-routing.module';
import { ShortStoryMobilePage } from './short-story-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [ShortStoryMobilePage],
  imports: [
    CommonModule,
    ShortStoryMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class ShortStoryMobileModule { }
