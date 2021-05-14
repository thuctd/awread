import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMobileRoutingModule } from './list-mobile-routing.module';
import { ListMobilePage } from './list-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [ListMobilePage],
  imports: [
    CommonModule,
    ListMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class ListMobileModule { }
