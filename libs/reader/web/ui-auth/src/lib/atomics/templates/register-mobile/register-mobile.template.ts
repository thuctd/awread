import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginRegisterPage } from '../../../pages/login-register.page';

@Component({
  selector: 'template-register-mobile',
  templateUrl: './register-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterMobileTemplate extends LoginRegisterPage { }
