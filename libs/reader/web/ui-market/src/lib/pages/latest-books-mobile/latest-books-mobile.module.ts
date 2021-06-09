import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestBooksMobileRoutingModule } from './latest-books-mobile-routing.module';
import { LatestBooksMobilePage } from './latest-books-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [LatestBooksMobilePage],
  imports: [
    CommonModule,
    LatestBooksMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class LatestBooksMobileModule { }
