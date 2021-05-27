import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-navbar-btn-logged',
  templateUrl: './navbar-btn-logged.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .auth-ava {
        top: 50%;
        transform: translateY(-50%);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarBtnLoggedAtom implements OnInit {
  @Input() user = {
    lastname: 'BlackCu',
    name: 'Hi',
  };
  @Output() submitEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
