import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'page-detail-desktop',
  templateUrl: './detail-desktop.page.html',
  styleUrls: ['./detail-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailDesktopPage extends DetailPage {}
