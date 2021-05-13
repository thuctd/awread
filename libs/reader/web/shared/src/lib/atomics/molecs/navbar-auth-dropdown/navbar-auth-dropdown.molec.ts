import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faCoins, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-navbar-auth-dropdown',
  templateUrl: './navbar-auth-dropdown.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarAuthDropdownMolec implements OnInit {
  @Input() user = {
    name: 'BlackCu',
    firstname: 'BlackCu'
  };
  menu = [
    {
      href: '/',
      title: 'Thông báo'
    },
    {
      href: '/',
      title: 'Hộp thư'
    },
    {
      href: '/',
      title: 'Nạp coin'
    },
    {
      href: '/',
      title: 'Thư viện'
    },
    {
      href: '/',
      title: 'Cài đặt tài khoản'
    }
  ];
  icons = { faCoins, faArrowRight };
  constructor() { }

  ngOnInit(): void {
  }

}
