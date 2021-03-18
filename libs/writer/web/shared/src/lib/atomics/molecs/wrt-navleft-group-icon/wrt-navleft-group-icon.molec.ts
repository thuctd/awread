import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-navleft-group-icon',
  templateUrl: './wrt-navleft-group-icon.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtNavleftGroupIconMolec implements OnInit {
  lefNavData = [
    // {
    //   name: 'dashboard',
    //   iconUrl: '/global-assets/images/Dashboard.webp',
    //   linkTo: '/dashboard',
    // },
    {
      name: 'user',
      iconUrl: '/global-assets/images/user.webp',
      iconUrl2: '/global-assets/images/Group 2.webp',
      linkTo: '/profile',
    },
    {
      name: 'books',
      iconUrl: '/global-assets/images/Group 3.webp',
      iconUrl2: '/global-assets/images/books.webp',
      linkTo: '/list',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
