import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-rd-author-menu',
  templateUrl: './rd-author-menu.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .author_menu:before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 0.25rem solid transparent;
        border-right: 0.25rem solid transparent;
        border-bottom: 0.8rem solid #ffffff;
        position: absolute;
        margin: -0.8rem 9.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorMenuMolec implements OnInit {
  @Input() faIcon = faEllipsisH;
  @Input() menu = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.menu = false;
  }

  displayMenu() {
    this.menu = !this.menu;
  }
}
