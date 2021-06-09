import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodBooksDesktopRoutingModule } from './good-books-desktop-routing.module';
import { GoodBooksDesktopPage } from './good-books-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [GoodBooksDesktopPage],
  imports: [
    CommonModule,
    GoodBooksDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class GoodBooksDesktopModule { }
