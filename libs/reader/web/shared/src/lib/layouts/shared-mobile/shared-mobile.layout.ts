import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SharedLayout } from '../shared/shared.layout';

@Component({
  selector: 'awread-shared-mobile',
  templateUrl: './shared-mobile.layout.html',
  styleUrls: ['./shared-mobile.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedMobileLayout extends SharedLayout {}
