import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'social-menu',
  templateUrl: './social-menu.atom.html',
  styleUrls: ['./social-menu.atom.scss'],
  host: {
    "(window:click)": "onClick()"
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMenuAtom implements OnInit {
  @Input() faIconComments = faEllipsisH;
  @Output() copyToClipboard = new EventEmitter();
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
