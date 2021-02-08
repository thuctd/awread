import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectedPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-collected-mobile',
  templateUrl: './collected-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectedMobilePage extends CollectedPage {}
