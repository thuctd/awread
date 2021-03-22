import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginMobileTemplate } from '../../templates/login-mobile/login-mobile.template';
import { LoginWebTemplate } from '../../templates/login-web/login-web.template';

@Component({
  selector: 'organ-register',
  templateUrl: './register.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterOrgan implements OnInit {
  @Input() text = 'Nếu bạn đã có tài khoản?';
  @Input() textLink = 'Đăng nhập';
  @Input() authForm = this.fb.group({
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder, private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openFormLogin($event): void {
    this.matDialog.open(LoginWebTemplate, {
      width: '32rem',
      height: '38rem',
    });
  }
  openFormLoginMobile($event): void {
    this.matDialog.open(LoginMobileTemplate, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });
  }
}
