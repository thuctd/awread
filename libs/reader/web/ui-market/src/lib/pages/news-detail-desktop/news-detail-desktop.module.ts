import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailDesktopRoutingModule } from './news-detail-desktop-routing.module';
import { NewsDetailDesktopPage } from './news-detail-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [NewsDetailDesktopPage],
  imports: [CommonModule, NewsDetailDesktopRoutingModule, ReaderWebUiMarketAtomicModule],
})
export class NewsDetailDesktopModule {}
