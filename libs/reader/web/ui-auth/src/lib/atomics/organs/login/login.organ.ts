import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterMobileTemplate } from '../../templates/register-mobile/register-mobile.template';
import { RegisterWebTemplate } from '../../templates/register-web/register-web.template';

@Component({
  selector: 'organ-login',
  templateUrl: './login.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginOrgan implements OnInit {
  @Input() authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder, private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openFormRegister($event): void {
    this.matDialog.open(RegisterWebTemplate, {
      width: '32rem',
      height: '42rem',
    });
  }
  openFormRegisterMobile($event): void {
    this.matDialog.open(RegisterMobileTemplate, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });
  }
}
