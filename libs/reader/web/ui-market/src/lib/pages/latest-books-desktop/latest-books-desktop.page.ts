import { LatestBooksPage } from './../latest-books/latest-books.page';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-latest-books-desktop',
  templateUrl: './latest-books-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatestBooksDesktopPage extends LatestBooksPage {}
