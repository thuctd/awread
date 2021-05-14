import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderWebUiMarketRoutingModule } from './reader-web-ui-market-routing.module';
import { MarketLayout } from './layouts/market/market.layout';

@NgModule({
  imports: [CommonModule, ReaderWebUiMarketRoutingModule],
  declarations: [MarketLayout],
  exports: [MarketLayout],
})
export class ReaderWebUiMarketModule { }
