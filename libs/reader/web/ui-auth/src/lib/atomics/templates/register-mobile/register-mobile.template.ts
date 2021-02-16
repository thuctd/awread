import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
export class RegisterMobileTemplate implements OnInit {
  @Input() authForm = this.fb.group({
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder, @Optional() public dialogRef: MatDialogRef<RegisterMobileTemplate>) {}

  ngOnInit(): void {}
}
