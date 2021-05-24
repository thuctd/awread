import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { faBars, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'organ-navbar-mb',
  templateUrl: './navbar-mb.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMbOrgan implements OnInit {
  @Input() search = faSearch;
  @Input() bell = faBell;
  @Input() bars = faBars;
  @Input() isLogin = true;
  @Input() isMenu = false;
  @Output() clickDisplaySearch = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
