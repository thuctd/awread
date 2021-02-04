import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import type { User } from '@awread/writer/web/feature-auth';

@Component({
  selector: 'right-topnav',
  templateUrl: './right-topnav.molec.html',
  styleUrls: ['./right-topnav.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightTopnavMolec implements OnInit {
  // avatarUrl = 'http://tachyons.io/img/logo.jpg';
  // name = 'Hà Thanh Tùng';
  @Input() user = [];
  @Output() searchEvent = new EventEmitter();
  @Output() signoutEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
