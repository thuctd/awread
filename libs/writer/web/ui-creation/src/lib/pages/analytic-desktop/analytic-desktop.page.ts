import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnalyticPage } from '../analytic/analytic.page';

@Component({
  selector: 'page-analytic-desktop',
  templateUrl: './analytic-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticDesktopPage extends AnalyticPage { }
