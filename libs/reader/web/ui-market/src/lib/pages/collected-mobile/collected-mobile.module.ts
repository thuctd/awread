import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectedMobileRoutingModule } from './collected-mobile-routing.module';
import { CollectedMobilePage } from './collected-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [CollectedMobilePage],
  imports: [
    CommonModule,
    CollectedMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class CollectedMobileModule { }
