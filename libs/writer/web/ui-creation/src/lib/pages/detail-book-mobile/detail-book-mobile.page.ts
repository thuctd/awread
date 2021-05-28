import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailBookPage } from '../detail-book/detail-book.page';

@Component({
  selector: 'page-detail-book-mobile',
  templateUrl: './detail-book-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookMobilePage extends DetailBookPage {}
