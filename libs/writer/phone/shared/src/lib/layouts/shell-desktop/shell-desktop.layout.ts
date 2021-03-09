import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShellLayout } from '../shell/shell.layout';

@Component({
  selector: 'awread-shell-desktop',
  templateUrl: './shell-desktop.layout.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellDesktopLayout extends ShellLayout {}
