import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-navbar-mb',
  templateUrl: './rd-navbar-mb.template.html',
  styles: [
    `
      :host {
        display: block;
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
}
