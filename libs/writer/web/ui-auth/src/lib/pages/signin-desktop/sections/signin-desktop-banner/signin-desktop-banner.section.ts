import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-signin-desktop-banner',
  templateUrl: './signin-desktop-banner.section.html',
  styleUrls: ['./signin-desktop-banner.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninDesktopBannerSection implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
