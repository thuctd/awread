import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-navbar-auth-btns',
  templateUrl: './navbar-auth-btns.molec.html',
  styleUrls: ['./navbar-auth-btns.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarAuthBtnsMolec implements OnInit {
  @Input() show = false;
  @Input() isLogin = false;
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
