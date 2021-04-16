import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDesktopRoutingModule } from './detail-desktop-routing.module';
import { DetailDesktopPage } from './detail-desktop.page';
import { ReaderWebUiMarketAtomicModule } from '../../atomics/reader-web-ui-market-atomic.module';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GlobalPackagesModule } from '@awread/global/packages';


@NgModule({
  declarations: [DetailDesktopPage],
  imports: [
    CommonModule,
    DetailDesktopRoutingModule,
    ReaderWebUiMarketAtomicModule,
    GlobalPackagesModule
  ]
})
export class DetailDesktopModule { }
