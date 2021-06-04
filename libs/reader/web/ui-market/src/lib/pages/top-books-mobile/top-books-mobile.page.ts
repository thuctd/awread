import { TopBooksPage } from './../top-books/top-books.page';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-top-books-mobile',
  templateUrl: './top-books-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBooksMobilePage extends TopBooksPage { }
