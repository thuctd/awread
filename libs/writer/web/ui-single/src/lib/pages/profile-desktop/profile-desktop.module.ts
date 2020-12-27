import { WriterWebUiSingleAtomicModule } from './../../atomics/writer-web-ui-single-atomic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDesktopRoutingModule } from './profile-desktop-routing.module';
import { ProfileDesktopPage } from './profile-desktop.page';

@NgModule({
  declarations: [ProfileDesktopPage],
  imports: [
    CommonModule,
    ProfileDesktopRoutingModule,
    WriterWebUiSingleAtomicModule,
  ],
})
export class ProfileDesktopModule { }
