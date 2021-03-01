import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
  @Input() items = ['Về chúng tôi', 'Tham gia cùng chúng tôi', 'Tin tức'];

  @Input() btns = {
    login: 'Đăng nhập',
    register: 'Đăng ký',
    logOut: 'Đăng xuất',
  };

  @Input() isLogin = true;
  @Input() name = 'Name';
  @Input() lvVip = '0';
  @Input() coin = '0';
  @Input() isMenu = true;

  constructor() {}

  ngOnInit(): void {}

  login() {
    this.isLogin = !this.isLogin;
  }

  displayMenu() {
    this.isMenu = !this.isMenu;
  }
}
