import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingPage } from '../setting/setting.page';

@Component({
  selector: 'page-setting-desktop',
  templateUrl: './setting-desktop.page.html',
  styleUrls: ['./setting-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingDesktopPage extends SettingPage {}
