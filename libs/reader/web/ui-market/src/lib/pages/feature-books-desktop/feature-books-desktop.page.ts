import { FeatureBooksPage } from './../feature-books/feature-books.page';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-feature-books-desktop',
  templateUrl: './feature-books-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureBooksDesktopPage extends FeatureBooksPage {}
