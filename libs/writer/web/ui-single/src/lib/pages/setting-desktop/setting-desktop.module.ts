import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingDesktopRoutingModule } from './setting-desktop-routing.module';
import { SettingDesktopPage } from './setting-desktop.page';

@NgModule({
  declarations: [SettingDesktopPage],
  imports: [CommonModule, SettingDesktopRoutingModule],
})
export class SettingDesktopModule {}
