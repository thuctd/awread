import { LoginWebTemplate, RegisterWebTemplate } from '@awread/reader/web/ui-auth';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'molec-navbar-auth-btns',
  templateUrl: './navbar-auth-btns.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarAuthBtnsMolec implements OnInit {
  @Input() show = false;
  @Input() isLogin = false;
  @Output() submitEvent = new EventEmitter();
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openFormLogin($event): void {
    this.matDialog.open(LoginWebTemplate, {
      width: '32rem',
      height: '38rem',
    });
  }

  openFormRegister($event): void {
    this.matDialog.open(RegisterWebTemplate, {
      width: '32rem',
      height: '42rem',
    });
  }
}
