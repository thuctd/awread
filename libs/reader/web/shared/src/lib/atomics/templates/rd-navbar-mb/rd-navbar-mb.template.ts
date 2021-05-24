import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-navbar-mb',
  templateUrl: './rd-navbar-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
      .z-999 {
        z-index: 999;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNavbarMbTemplate implements OnInit {
  @Input() isLogin = false;
  @Input() isMenu = false;
  @Input() isSearch = false;
  constructor() {}

  ngOnInit(): void {}

  displayMenu() {
    this.isSearch = !this.isSearch;
  }

  onClick() {
    this.isSearch = false;
  }
}
