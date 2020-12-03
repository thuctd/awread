import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'page-home-mobile',
  templateUrl: './home-mobile.page.html',
  styleUrls: ['./home-mobile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMobilePage extends HomePage {}
