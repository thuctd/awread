import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBooksDesktopRoutingModule } from './feature-books-desktop-routing.module';
import { FeatureBooksDesktopPage } from './feature-books-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [FeatureBooksDesktopPage],
  imports: [
    CommonModule,
    FeatureBooksDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class FeatureBooksDesktopModule { }
