import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-navbar-desktop',
  templateUrl: './navbar-desktop.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDesktopOrgan implements OnInit {
  @Input() isLogin = false;
  constructor() { }

  ngOnInit(): void {
  }

}
