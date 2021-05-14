import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthorBookPage } from '../author-book/author-book.page';

@Component({
  selector: 'ui-author-book-mobile',
  templateUrl: './author-book-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorBookMobilePage extends AuthorBookPage { }
