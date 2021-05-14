import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IntroductionPage } from '../introduction/introduction.page';

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
export class IntroductionDesktopPage extends IntroductionPage { }
