import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-login-form',
  templateUrl: './login-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormMolec implements OnInit {
  @Input() type = 'password';
  icons = { faLock, faEnvelope };
  @Input() form: FormGroup = this.fb.group({
    loginname: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  @Output() auth = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
