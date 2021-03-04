import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-list-desktop',
  templateUrl: './list-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDesktopPage extends ListPage {}
