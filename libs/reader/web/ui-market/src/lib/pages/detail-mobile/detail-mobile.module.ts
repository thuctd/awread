import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMobileRoutingModule } from './detail-mobile-routing.module';
import { DetailMobilePage } from './detail-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [DetailMobilePage],
  imports: [
    CommonModule,
    DetailMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class DetailMobileModule { }
