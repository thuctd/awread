import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShellLayout } from '../shell/shell.layout';

@Component({
  selector: 'awread-shell-desktop',
  templateUrl: './shell-desktop.layout.html',
  styleUrls: ['./shell-desktop.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellDesktopLayout extends ShellLayout {}
