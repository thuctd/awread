import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailMobileRoutingModule } from './news-detail-mobile-routing.module';
import { NewsDetailMobilePage } from './news-detail-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [NewsDetailMobilePage],
  imports: [CommonModule, NewsDetailMobileRoutingModule, ReaderWebUiMarketAtomicModule],
})
export class NewsDetailMobileModule {}
