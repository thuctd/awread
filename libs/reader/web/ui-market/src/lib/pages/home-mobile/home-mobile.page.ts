import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'ui-home-mobile',
  templateUrl: './home-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMobilePage extends HomePage { }
