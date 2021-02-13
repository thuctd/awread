import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShellLayout } from '../shell/shell.layout';

@Component({
  selector: 'awread-shell-mobile',
  templateUrl: './shell-mobile.layout.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellMobileLayout extends ShellLayout {}
