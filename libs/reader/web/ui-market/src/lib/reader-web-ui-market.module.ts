import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderWebUiMarketRoutingModule } from './reader-web-ui-market-routing.module';
import { MarketLayout } from './layouts/market/market.layout';
import { ReaderWebFeatureMarketModule } from '@awread/reader/web/feature-market';

@NgModule({
  imports: [CommonModule, ReaderWebUiMarketRoutingModule, ReaderWebFeatureMarketModule],
  declarations: [MarketLayout],
  exports: [MarketLayout],
})
export class ReaderWebUiMarketModule {}
