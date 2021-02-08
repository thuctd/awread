import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-detail-mobile',
  templateUrl: './detail-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailMobilePage extends DetailPage {}
