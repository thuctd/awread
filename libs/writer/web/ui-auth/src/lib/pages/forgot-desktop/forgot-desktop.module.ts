import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotDesktopRoutingModule } from './forgot-desktop-routing.module';
import { ForgotDesktopPage } from './forgot-desktop.page';
import { WriterWebUiAuthAtomicModule } from '../../atomic/writer-web-ui-auth-atomic.module';

@NgModule({
  declarations: [ForgotDesktopPage],
  imports: [
    CommonModule,
    ForgotDesktopRoutingModule,
    WriterWebUiAuthAtomicModule,
  ],
})
export class ForgotDesktopModule {}
