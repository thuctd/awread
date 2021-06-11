import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wrt-new-password',
  templateUrl: './wrt-new-password.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtNewPasswordOrgan implements OnInit {
  @Output() submitEvent = new EventEmitter();

  form = this.fb.group(
    {
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(4)]],
    },
    { validator: this.passwordMatchValidator }
  );

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmpassword').value ? null : { missmatch: true };
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  updatePasswordEvent() {
    // console.log('this.form', this.form);
    const formValue = this.form.value;
    if (formValue.password !== formValue.confirmpassword) {
      return;
    }
    this.submitEvent.emit(formValue.password);
  }
}
