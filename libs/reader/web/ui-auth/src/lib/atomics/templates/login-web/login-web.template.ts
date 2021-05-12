import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoginRegisterPage } from '../../../pages/login-register.page';

@Component({
  selector: 'template-login-web',
  templateUrl: './login-web.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginWebTemplate extends LoginRegisterPage { }