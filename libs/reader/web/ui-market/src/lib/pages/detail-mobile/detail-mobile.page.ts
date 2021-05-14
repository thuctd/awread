import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailPage } from '../detail/detail.page';

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
export class DetailMobilePage extends DetailPage { }
