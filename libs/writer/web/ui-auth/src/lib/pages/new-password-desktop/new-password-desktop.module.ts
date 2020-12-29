import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPasswordDesktopRoutingModule } from './new-password-desktop-routing.module';
import { NewPasswordDesktopPage } from './new-password-desktop.page';
import { WriterWebUiAuthAtomicModule } from '../../atomics/writer-web-ui-auth-atomic.module';

@NgModule({
  declarations: [NewPasswordDesktopPage],
  imports: [
    CommonModule,
    NewPasswordDesktopRoutingModule,
    WriterWebUiAuthAtomicModule,
  ],
})
export class NewPasswordDesktopModule { }
