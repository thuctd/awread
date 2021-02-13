import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'page-detail-desktop',
  templateUrl: './detail-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailDesktopPage extends DetailPage {}
