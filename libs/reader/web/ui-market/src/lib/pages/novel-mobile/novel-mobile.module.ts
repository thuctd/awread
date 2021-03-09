import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovelMobileRoutingModule } from './novel-mobile-routing.module';
import { NovelMobilePage } from './novel-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [NovelMobilePage],
  imports: [
    CommonModule,
    NovelMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class NovelMobileModule { }
