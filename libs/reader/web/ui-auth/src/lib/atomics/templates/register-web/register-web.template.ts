import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginRegisterPage } from '../../../pages/login-register.page';

@Component({
  selector: 'template-register-web',
  templateUrl: './register-web.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterWebTemplate extends LoginRegisterPage { }