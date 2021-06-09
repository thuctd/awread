import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GoodBooksPage } from '../good-books/good-books.page';

@Component({
  selector: 'page-good-books-desktop',
  templateUrl: './good-books-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodBooksDesktopPage extends GoodBooksPage {}
