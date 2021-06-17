import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnalyticPage } from '../analytic/analytic.page';

@Component({
  selector: 'page-analytic-mobile',
  templateUrl: './analytic-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticMobilePage extends AnalyticPage { }
