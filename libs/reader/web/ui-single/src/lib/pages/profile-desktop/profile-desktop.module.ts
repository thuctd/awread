import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDesktopRoutingModule } from './profile-desktop-routing.module';
import { ProfileDesktopPage } from './profile-desktop.page';
import { ReaderWebUiSingleAtomicModule } from '../../atomics/reader-web-ui-single-atomic.module';

@NgModule({
  declarations: [ProfileDesktopPage],
  imports: [CommonModule, ProfileDesktopRoutingModule, ReaderWebUiSingleAtomicModule],
})
export class ProfileDesktopModule {}
