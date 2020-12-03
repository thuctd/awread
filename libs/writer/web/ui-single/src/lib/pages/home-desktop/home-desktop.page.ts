import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'page-home-desktop',
  templateUrl: './home-desktop.page.html',
  styleUrls: ['./home-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDesktopPage extends HomePage {}
