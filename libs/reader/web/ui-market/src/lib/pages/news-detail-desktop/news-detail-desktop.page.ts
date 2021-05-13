import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-news-detail-desktop',
  templateUrl: './news-detail-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailDesktopPage extends NewsPage {}
