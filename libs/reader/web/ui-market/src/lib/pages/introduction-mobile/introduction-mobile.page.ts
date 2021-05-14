import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IntroductionPage } from '../introduction/introduction.page';

@Component({
  selector: 'ui-introduction-mobile',
  templateUrl: './introduction-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionMobilePage extends IntroductionPage { }
