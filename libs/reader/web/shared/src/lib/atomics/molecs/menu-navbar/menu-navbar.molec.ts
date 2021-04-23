import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LoginMobileTemplate, RegisterMobileTemplate } from '@awread/reader/web/ui-auth';
@Component({
  selector: 'molec-menu-navbar',
  templateUrl: './menu-navbar.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        z-index: 400;
      }
      :host .br__menu {
        border-radius: 0 0 0 13rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavbarMolec implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() bars = faBars;
  @Input() times = faTimes;
  @Input() items = [
    {
      title: 'Về chúng tôi',
      href: '/',
    },
    {
      title: 'Tham gia cùng chúng tôi',
      href: '/',
    },
    {
      title: 'Tin tức',
      href: '/',
    },
  ];

  @Input() btns = {
    login: 'Đăng nhập',
    register: 'Đăng ký',
    logOut: 'Đăng xuất',
  };

  @Input() isLogin = true;
  @Input() name = 'Name';
  @Input() lvVip = '0';
  @Input() coin = '0';
  @Input() isMenu = false;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  login() {
    this.isLogin = !this.isLogin;
  }

  displayMenu() {
    this.isMenu = !this.isMenu;
  }

  onClick() {
    this.isMenu = false;
  }

  openFormLogin($event): void {
    this.matDialog.open(LoginMobileTemplate, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });
  }
  openFormRegister($event): void {
    this.matDialog.open(RegisterMobileTemplate, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });
  }
}
