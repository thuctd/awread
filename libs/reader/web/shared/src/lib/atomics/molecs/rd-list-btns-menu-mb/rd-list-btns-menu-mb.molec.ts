import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginMobileTemplate, RegisterMobileTemplate } from '@awread/reader/web/ui-auth';
@Component({
  selector: 'molec-rd-list-btns-menu-mb',
  templateUrl: './rd-list-btns-menu-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdListBtnsMenuMbMolec implements OnInit {
  @Input() isLogin = true;

  @Output() logoutEvent = new EventEmitter();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

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
