import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-news-mobile',
  templateUrl: './news-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsMobilePage extends NewsPage {}
