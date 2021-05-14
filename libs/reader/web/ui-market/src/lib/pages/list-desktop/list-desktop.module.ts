import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDesktopRoutingModule } from './list-desktop-routing.module';
import { ListDesktopPage } from './list-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [ListDesktopPage],
  imports: [
    CommonModule,
    ListDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class ListDesktopModule { }
