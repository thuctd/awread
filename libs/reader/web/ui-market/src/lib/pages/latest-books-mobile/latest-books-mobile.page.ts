import { LatestBooksPage } from './../latest-books/latest-books.page';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-latest-books-mobile',
  templateUrl: './latest-books-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatestBooksMobilePage extends LatestBooksPage {}
