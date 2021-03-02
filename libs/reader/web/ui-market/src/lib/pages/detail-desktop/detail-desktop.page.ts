import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-detail-desktop',
  templateUrl: './detail-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailDesktopPage extends DetailPage {}
