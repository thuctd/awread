import { TopBooksPage } from './../top-books/top-books.page';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-top-books-desktop',
  templateUrl: './top-books-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBooksDesktopPage extends TopBooksPage { }
