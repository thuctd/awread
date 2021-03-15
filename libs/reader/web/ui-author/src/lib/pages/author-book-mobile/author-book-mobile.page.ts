import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthorBookPage } from '@awread/reader/web/feature-author';

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
export class AuthorBookMobilePage extends AuthorBookPage {}
