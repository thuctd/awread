import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-navbar-auth-btn',
  templateUrl: './navbar-auth-btn.atom.html',
  styleUrls: ['./navbar-auth-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarAuthBtnAtom implements OnInit {
  @Input() title = 'Đăng nhập';
  @Input() show = false;
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
