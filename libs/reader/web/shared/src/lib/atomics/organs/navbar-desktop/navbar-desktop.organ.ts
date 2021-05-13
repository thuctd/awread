import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input() user = {};
  @Input() items = [];
  @Input() searchControl = new FormControl();
  @Output() eventSearch = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  @Input() isLogin = false;
  constructor() { }

  ngOnInit(): void {
  }

}
