import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestBooksDesktopRoutingModule } from './latest-books-desktop-routing.module';
import { LatestBooksDesktopPage } from './latest-books-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [LatestBooksDesktopPage],
  imports: [
    CommonModule,
    LatestBooksDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class LatestBooksDesktopModule { }
