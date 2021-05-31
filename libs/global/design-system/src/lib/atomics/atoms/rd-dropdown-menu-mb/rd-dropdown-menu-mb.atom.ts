import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-rd-dropdown-menu-mb',
  templateUrl: './rd-dropdown-menu-mb.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdDropdownMenuMbAtom implements OnInit {
  @Input() faIcon = faCaretRight;
  @Input() faIcon2 = faCaretDown;
  @Input() isDisplayMenu = true;
  @Output() clickCloseMenu = new EventEmitter();

  @Input() items = {
    title: 'Truyện',
    dropdown: [
      {
        title: 'Truyện tự sáng tác',
        href: '/composed',
      },
      {
        title: 'Truyện sưu tầm',
        href: '/collected',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  displayMenu() {
    this.isDisplayMenu = !this.isDisplayMenu;
  }
}
