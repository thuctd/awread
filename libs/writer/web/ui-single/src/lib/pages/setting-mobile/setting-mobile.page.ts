import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingPage } from '../setting/setting.page';

@Component({
  selector: 'page-setting-mobile',
  templateUrl: './setting-mobile.page.html',
  styleUrls: ['./setting-mobile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingMobilePage extends SettingPage {}
