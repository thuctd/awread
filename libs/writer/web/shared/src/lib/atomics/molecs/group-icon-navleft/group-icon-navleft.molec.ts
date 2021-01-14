import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'group-icon-navleft',
  templateUrl: './group-icon-navleft.molec.html',
  styleUrls: ['./group-icon-navleft.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupIconNavleftMolec implements OnInit {
  lefNavData = [
    {
      name: 'dashboard',
      iconUrl: '/global-assets/images/Dashboard.png',
      linkTo: '/list',
    },
    {
      name: 'user',
      iconUrl: '/global-assets/images/user.png',
      linkTo: '/profile',
    },
    {
      name: 'books',
      iconUrl: '/global-assets/images/books.png',
      linkTo: '/list',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
