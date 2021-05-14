import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomePage } from '../home/home.page';

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
export class HomeDesktopPage extends HomePage { }
