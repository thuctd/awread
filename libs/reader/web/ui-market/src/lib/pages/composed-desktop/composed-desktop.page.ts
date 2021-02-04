import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComposedPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-composed-desktop',
  templateUrl: './composed-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComposedDesktopPage extends ComposedPage {}
