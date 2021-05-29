import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wrt-menu-btn',
  templateUrl: './wrt-menu-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtMenuBtnAtom implements OnInit {
  @Input() faIconComments = faEllipsisH;
  @Output() copyToClipboard = new EventEmitter();
  @Output() deletePart = new EventEmitter();
  @Input() previewLink = ['https://awread.vn', 'books', 'abc', 'chapters', 'xyz'];
  @Input() btn = {
    submitText: 'Copy',
    isActive: false,
  };

  isMenuOpen = false;
  constructor() { }
  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void { }
}
