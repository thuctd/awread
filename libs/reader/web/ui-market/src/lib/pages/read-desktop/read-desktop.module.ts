import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadDesktopRoutingModule } from './read-desktop-routing.module';
import { ReadDesktopPage } from './read-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [ReadDesktopPage],
  imports: [
    CommonModule,
    ReadDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class ReadDesktopModule { }
