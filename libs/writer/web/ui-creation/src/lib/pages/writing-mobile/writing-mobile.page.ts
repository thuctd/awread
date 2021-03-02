import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WritingPage } from '../writing/writing.page';

@Component({
  selector: 'page-writing-mobile',
  templateUrl: './writing-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingMobilePage extends WritingPage {}
