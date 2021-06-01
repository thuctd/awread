import { ReaderWebUiMarketAtomicModule } from './../../atomics/reader-web-ui-market-atomic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBooksDesktopRoutingModule } from './top-books-desktop-routing.module';
import { TopBooksDesktopPage } from './top-books-desktop.page';


@NgModule({
  declarations: [TopBooksDesktopPage],
  imports: [
    CommonModule,
    TopBooksDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class TopBooksDesktopModule { }
