import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposedDesktopRoutingModule } from './composed-desktop-routing.module';
import { ComposedDesktopPage } from './composed-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [ComposedDesktopPage],
  imports: [
    CommonModule,
    ComposedDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class ComposedDesktopModule { }
