import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-list-mobile',
  templateUrl: './list-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListMobilePage extends ListPage {}
