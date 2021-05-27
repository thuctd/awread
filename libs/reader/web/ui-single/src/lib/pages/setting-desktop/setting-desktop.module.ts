import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingDesktopRoutingModule } from './setting-desktop-routing.module';
import { SettingDesktopPage } from './setting-desktop.page';
import { ReaderWebUiSingleAtomicModule } from '../../atomics/reader-web-ui-single-atomic.module';

@NgModule({
  declarations: [SettingDesktopPage],
  imports: [CommonModule, SettingDesktopRoutingModule, ReaderWebUiSingleAtomicModule],
})
export class SettingDesktopModule {}
