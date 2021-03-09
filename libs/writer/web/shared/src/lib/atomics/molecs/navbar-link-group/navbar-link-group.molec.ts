import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'navbar-link-group',
  templateUrl: './navbar-link-group.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarLinkGroupMolec implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
