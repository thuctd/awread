import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ForgotWebTemplate } from '../../templates/forgot-web/forgot-web.template';
import { LoginWebTemplate } from '../../templates/login-web/login-web.template';

@Component({
  selector: 'molec-remember-forgot-password',
  templateUrl: './remember-forgot-password.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RememberForgotPasswordMolec implements OnInit {
  @Input() text = 'Quên mật khẩu?';
  @Output() submitEvent = new EventEmitter();

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<LoginWebTemplate>) {}

  ngOnInit(): void {}

  onClick(): void {
    this.dialogRef.close();
  }

  openFormForgot($event): void {
    const dialogRef = this.dialog.open(ForgotWebTemplate, {
      width: '32rem',
      height: '28rem',
    });
  }
}
