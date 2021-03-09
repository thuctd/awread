import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectedDesktopRoutingModule } from './collected-desktop-routing.module';
import { CollectedDesktopPage } from './collected-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [CollectedDesktopPage],
  imports: [
    CommonModule,
    CollectedDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class CollectedDesktopModule { }
