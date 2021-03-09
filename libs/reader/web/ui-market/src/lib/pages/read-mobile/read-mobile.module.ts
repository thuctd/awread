import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadMobileRoutingModule } from './read-mobile-routing.module';
import { ReadMobilePage } from './read-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [ReadMobilePage],
  imports: [
    CommonModule,
    ReadMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class ReadMobileModule { }
