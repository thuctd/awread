import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar-icon',
  templateUrl: './navbar-icon.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      .active .active-block {
        display: block;
      }
      .active .icon1 {
        opacity: 0 !important;
      }
      .active .image-active {
        opacity: 1 !important;
      }
      .active {
        background-color: #a9e5ce;
      }
      .ml003 {
        margin-left: 0.03rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarIconAtom implements OnInit {
  @Input() active = 'active';
  @Input() linkName = 'dashboard';
  @Input() linkTo = 'dashboard';
  @Input() iconUrl = '/global-assets/images/Dashboard.png';
  @Input() iconUrl2 = '/global-assets/images/Group 1.png';

  constructor() {}

  ngOnInit(): void {}
}
