import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDesktopRoutingModule } from './home-desktop-routing.module';
import { HomeDesktopPage } from './home-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';
import { GlobalPackagesModule } from '@awread/global/packages';


@NgModule({
  declarations: [HomeDesktopPage],
  imports: [
    CommonModule,
    HomeDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule,
    GlobalPackagesModule
  ]
})
export class HomeDesktopModule { }
