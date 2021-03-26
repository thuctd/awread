import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionDesktopRoutingModule } from './introduction-desktop-routing.module';
import { IntroductionDesktopPage } from './introduction-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';

@NgModule({
  declarations: [IntroductionDesktopPage],
  imports: [CommonModule, IntroductionDesktopRoutingModule, ReaderWebUiMarketAtomicModule],
})
export class IntroductionDesktopModule {}
