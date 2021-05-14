import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthorPage } from '../author/author.page';

@Component({
  selector: 'ui-author-desktop',
  templateUrl: './author-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorDesktopPage extends AuthorPage { }
