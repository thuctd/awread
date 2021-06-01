import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() user = {};
  @Input() isLogin;
  @Input() isSearch = false;
  @Input() searchControl = new FormControl('');
  @Output() eventSearch = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  displayMenu() {
    this.isSearch = !this.isSearch;
  }

  onClick() {
    this.isSearch = false;
  }
}
