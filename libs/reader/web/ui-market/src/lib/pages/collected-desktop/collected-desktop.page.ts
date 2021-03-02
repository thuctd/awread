import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectedPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-collected-desktop',
  templateUrl: './collected-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectedDesktopPage extends CollectedPage {}
