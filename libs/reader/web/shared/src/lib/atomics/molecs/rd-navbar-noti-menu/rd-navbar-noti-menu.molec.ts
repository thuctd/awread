import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-rd-navbar-noti-menu',
  templateUrl: './rd-navbar-noti-menu.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNavbarNotiMenuMolec implements OnInit {
  @Input() bell = faBell;

  @Input() isMenu = false;
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isMenu = false;
  }
}
