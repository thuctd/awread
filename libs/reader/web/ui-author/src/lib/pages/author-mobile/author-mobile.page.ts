import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthorPage } from '@awread/reader/web/feature-author';

@Component({
  selector: 'ui-author-mobile',
  templateUrl: './author-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorMobilePage extends AuthorPage {}
