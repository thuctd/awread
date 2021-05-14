import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthorPage } from '../author/author.page';

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
export class AuthorMobilePage extends AuthorPage { }
