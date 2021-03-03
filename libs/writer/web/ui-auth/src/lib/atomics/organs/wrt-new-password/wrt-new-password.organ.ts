import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  @Output() submitEvent = new EventEmitter();
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  updatePassworEvent() {
    const formValue = this.form.value;
    if (formValue.password !== formValue.confirmpassword) {
      return;
    }
    this.submitEvent.emit(formValue.password);
  }
}
