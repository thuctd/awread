import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomePage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-home-desktop',
  templateUrl: './home-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDesktopPage extends HomePage {}
