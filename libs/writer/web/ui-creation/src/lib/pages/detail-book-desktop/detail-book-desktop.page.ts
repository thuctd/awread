import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailBookPage } from '../detail-book/detail-book.page';

@Component({
  selector: 'page-detail-book-desktop',
  templateUrl: './detail-book-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookDesktopPage extends DetailBookPage {}
