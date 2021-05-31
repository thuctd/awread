import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-rd-menu-mb',
  templateUrl: './rd-menu-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        z-index: 400;
      }
      :host .br__menu {
        border-radius: 0 0 0 13rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdMenuMbMolec implements OnInit {
  @Input() user = {};
  @Input() isMenu = false;
  @Input() bars = faBars;
  @Input() times = faTimes;
  @Input() isLogin = true;

  @Output() logoutEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  displayMenu() {
    this.isMenu = !this.isMenu;
  }

  onClick() {
    this.isMenu = false;
  }
}
