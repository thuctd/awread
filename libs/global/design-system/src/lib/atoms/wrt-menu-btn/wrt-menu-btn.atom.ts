import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wrt-menu-btn',
  templateUrl: './wrt-menu-btn.atom.html',
  styleUrls: ['./wrt-menu-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtMenuBtnAtom implements OnInit {
  @Input() faIconComments = faEllipsisH;
  @Output() copyToClipboard = new EventEmitter();
  @Input() awreadLink = 'abcxyz';
  @Input() btn = {
    submitText: 'Copy',
    isActive: false,
  };

  isMenuOpen = false;
  constructor() {
  }
  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
  }

}
