import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-search-mobile',
  templateUrl: './search-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchMobilePage extends SearchPage {}
