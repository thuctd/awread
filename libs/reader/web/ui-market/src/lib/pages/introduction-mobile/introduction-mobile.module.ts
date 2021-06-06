import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionMobileRoutingModule } from './introduction-mobile-routing.module';
import { IntroductionMobilePage } from './introduction-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [IntroductionMobilePage],
  imports: [CommonModule, IntroductionMobileRoutingModule, ReaderWebUiMarketAtomicModule],
})
export class IntroductionMobileModule {}
