import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'group-icon-navleft',
  templateUrl: './group-icon-navleft.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupIconNavleftMolec implements OnInit {
  lefNavData = [
    // {
    //   name: 'dashboard',
    //   iconUrl: '/global-assets/images/Dashboard.png',
    //   linkTo: '/dashboard',
    // },
    {
      name: 'user',
      iconUrl: '/global-assets/images/user.png',
      iconUrl2: '/global-assets/images/Group 2.png',
      linkTo: '/profile',
    },
    {
      name: 'books',
      iconUrl: '/global-assets/images/Group 3.png',
      iconUrl2: '/global-assets/images/books.png',
      linkTo: '/list',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
