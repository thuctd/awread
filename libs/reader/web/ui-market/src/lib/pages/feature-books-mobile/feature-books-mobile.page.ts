import { FeatureBooksPage } from './../feature-books/feature-books.page';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-feature-books-mobile',
  templateUrl: './feature-books-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureBooksMobilePage extends FeatureBooksPage {}
