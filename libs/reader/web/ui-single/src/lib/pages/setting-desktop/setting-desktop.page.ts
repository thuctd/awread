import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingPage } from '../setting/setting.page';

@Component({
  selector: 'page-setting-desktop',
  templateUrl: './setting-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingDesktopPage extends SettingPage {}
