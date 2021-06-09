import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodBooksMobileRoutingModule } from './good-books-mobile-routing.module';
import { GoodBooksMobilePage } from './good-books-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [GoodBooksMobilePage],
  imports: [
    CommonModule,
    GoodBooksMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class GoodBooksMobileModule { }
