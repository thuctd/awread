import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faBars, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'organ-group-icon-navbar',
  templateUrl: './group-icon-navbar.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupIconNavbarOrgan implements OnInit {
  @Input() search = faSearch;
  @Input() bell = faBell;
  @Input() bars = faBars;
  @Input() isLogin = false;
  @Input() isMenu = false;
  @Input() isSearch = false;

  constructor() {}

  ngOnInit(): void {}
}
