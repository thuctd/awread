import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WritingPage } from '../writing/writing.page';

@Component({
  selector: 'page-writing-desktop',
  templateUrl: './writing-desktop.page.html',
  styleUrls: ['./writing-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingDesktopPage extends WritingPage {}
