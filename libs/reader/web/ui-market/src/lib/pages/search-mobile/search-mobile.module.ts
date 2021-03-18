import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMobileRoutingModule } from './search-mobile-routing.module';
import { SearchMobilePage } from './search-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [SearchMobilePage],
  imports: [CommonModule, SearchMobileRoutingModule, ReaderWebUiMarketAtomicModule],
})
export class SearchMobileModule {}
