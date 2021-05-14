import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsMobileRoutingModule } from './news-mobile-routing.module';
import { NewsMobilePage } from './news-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [NewsMobilePage],
  imports: [CommonModule, NewsMobileRoutingModule, ReaderWebUiMarketAtomicModule],
})
export class NewsMobileModule {}
