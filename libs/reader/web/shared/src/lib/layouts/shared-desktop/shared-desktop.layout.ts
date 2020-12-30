import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SharedLayout } from '../shared/shared.layout';

@Component({
  selector: 'awread-shared-desktop',
  templateUrl: './shared-desktop.layout.html',
  styleUrls: ['./shared-desktop.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedDesktopLayout extends SharedLayout {}
