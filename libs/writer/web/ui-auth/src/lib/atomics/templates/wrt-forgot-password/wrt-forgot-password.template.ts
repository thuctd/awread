import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'wrt-template-forgot-password',
  templateUrl: './wrt-forgot-password.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtForgotPasswordTemplate implements OnInit {
  @Input() isSentEmail = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @Output() forgotSubmit = new EventEmitter();
  @Output() closeEvent = new EventEmitter();
  // @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
  forgotSubmitEvent() {
    this.forgotSubmit.emit(this.emailFormControl.value);
  }
}
