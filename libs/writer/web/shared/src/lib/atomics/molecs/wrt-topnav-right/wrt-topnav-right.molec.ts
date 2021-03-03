import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import type { User } from '@awread/writer/web/feature-auth';

@Component({
  selector: 'wrt-topnav-right',
  templateUrl: './wrt-topnav-right.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtTopnavRightMolec implements OnInit {
  // avatarUrl = 'http://tachyons.io/img/logo.jpg';
  // name = 'Hà Thanh Tùng';
  @Input() user = [];
  @Output() searchEvent = new EventEmitter();
  @Output() signoutEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
