import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposedMobileRoutingModule } from './composed-mobile-routing.module';
import { ComposedMobilePage } from './composed-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [ComposedMobilePage],
  imports: [
    CommonModule,
    ComposedMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class ComposedMobileModule { }
