import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-search-desktop',
  templateUrl: './search-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDesktopPage extends SearchPage {}
