import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDesktopRoutingModule } from './news-desktop-routing.module';
import { NewsDesktopPage } from './news-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [NewsDesktopPage],
  imports: [CommonModule, NewsDesktopRoutingModule, ReaderWebUiMarketAtomicModule],
})
export class NewsDesktopModule {}
