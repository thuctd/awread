import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IntroductionPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-introduction-desktop',
  templateUrl: './introduction-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionDesktopPage extends IntroductionPage {}
