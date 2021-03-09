import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
export class RegisterWebTemplate implements OnInit {
  @Input() link = '/global-assets/images/newlogo.png';

  @Input() authForm = this.fb.group({
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder, @Optional() public dialogRef: MatDialogRef<RegisterWebTemplate>) {}

  ngOnInit(): void {}
}
