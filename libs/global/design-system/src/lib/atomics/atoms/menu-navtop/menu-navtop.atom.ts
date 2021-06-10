import { faSignOutAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-navtop',
  templateUrl: './menu-navtop.atom.html',
  styleUrls: ['./menu-navtop.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavtopAtom implements OnInit {
  @Input() faIcon = { faSignOutAlt, faInfoCircle };
  @Input() isMenuOpen = false;

  @Input() user = {
    avatar: '/global-assets/images/logoAwread.webp',
    name: '',
    email: '',
    lastname: '',
  };
  @Output() signoutEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleMenu($event?) {
    if ($event) $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
