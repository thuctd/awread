import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
export class LoginWebTemplate implements OnInit {
  @Input() link = '/global-assets/images/newlogo.webp';
  @Input() authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder, @Optional() public dialogRef: MatDialogRef<LoginWebTemplate>) {}

  ngOnInit(): void {}
}
