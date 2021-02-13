import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingPage } from '../setting/setting.page';

@Component({
  selector: 'page-setting-mobile',
  templateUrl: './setting-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingMobilePage extends SettingPage {}
