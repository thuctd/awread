import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'template-forgot-password',
  templateUrl: './forgot-password.template.html',
  styleUrls: ['./forgot-password.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordTemplate implements OnInit {
  isSentEmail = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  @Output() forgotSubmit = new EventEmitter();
  @Output() closeEvent = new EventEmitter();
  // @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
  forgotSubmitEvent() {
    this.isSentEmail = true;
    this.forgotSubmit.emit(this.emailFormControl.value);
  }
}
