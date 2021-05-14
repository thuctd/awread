import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComposedPage } from '../composed/composed.page';

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
export class ComposedDesktopPage extends ComposedPage { }
