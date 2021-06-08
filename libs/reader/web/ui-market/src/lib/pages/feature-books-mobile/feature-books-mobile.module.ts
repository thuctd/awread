import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBooksMobileRoutingModule } from './feature-books-mobile-routing.module';
import { FeatureBooksMobilePage } from './feature-books-mobile.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';


@NgModule({
  declarations: [FeatureBooksMobilePage],
  imports: [
    CommonModule,
    FeatureBooksMobileRoutingModule,
    ReaderWebUiMarketAtomicModule
  ]
})
export class FeatureBooksMobileModule { }
