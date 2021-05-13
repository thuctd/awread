import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-news-detail-mobile',
  templateUrl: './news-detail-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailMobilePage extends NewsPage {}
