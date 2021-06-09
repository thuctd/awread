import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GoodBooksPage } from '../good-books/good-books.page';

@Component({
  selector: 'page-good-books-mobile',
  templateUrl: './good-books-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodBooksMobilePage extends GoodBooksPage {}
