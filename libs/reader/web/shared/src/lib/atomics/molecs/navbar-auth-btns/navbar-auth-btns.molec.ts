import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-navbar-auth-btns',
  templateUrl: './navbar-auth-btns.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarAuthBtnsMolec implements OnInit {
  @Input() show = false;
  @Input() isLogin = false;
  @Output() submitEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
