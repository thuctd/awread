import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDesktopRoutingModule } from './search-desktop-routing.module';
import { SearchDesktopPage } from './search-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [SearchDesktopPage],
  imports: [CommonModule, SearchDesktopRoutingModule, ReaderWebUiMarketAtomicModule],
})
export class SearchDesktopModule {}
