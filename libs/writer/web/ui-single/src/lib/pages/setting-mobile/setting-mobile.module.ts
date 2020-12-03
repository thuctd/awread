import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingMobileRoutingModule } from './setting-mobile-routing.module';
import { SettingMobilePage } from './setting-mobile.page';

@NgModule({
  declarations: [SettingMobilePage],
  imports: [CommonModule, SettingMobileRoutingModule],
})
export class SettingMobileModule {}
