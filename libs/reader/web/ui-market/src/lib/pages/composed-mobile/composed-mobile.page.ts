import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComposedPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-composed-mobile',
  templateUrl: './composed-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComposedMobilePage extends ComposedPage {}
