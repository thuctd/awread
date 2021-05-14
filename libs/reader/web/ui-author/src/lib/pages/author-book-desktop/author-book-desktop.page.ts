import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthorBookPage } from '../author-book/author-book.page';

@Component({
  selector: 'ui-author-book-desktop',
  templateUrl: './author-book-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorBookDesktopPage extends AuthorBookPage { }
