import { ReaderWebUiMarketAtomicModule } from './../../atomics/reader-web-ui-market-atomic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBooksMobileRoutingModule } from './top-books-mobile-routing.module';
import { TopBooksMobilePage } from './top-books-mobile.page';


@NgModule({
  declarations: [TopBooksMobilePage],
  imports: [
    CommonModule,
    TopBooksMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class TopBooksMobileModule { }
