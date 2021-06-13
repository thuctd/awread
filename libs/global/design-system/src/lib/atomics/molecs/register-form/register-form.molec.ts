import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faLock, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-register-form',
  templateUrl: './register-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormMolec implements OnInit {
  @Input() type = 'password';
  icons = { faLock, faEnvelope, faUser, faPhone };
  @Input() form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', []],
    phone: ['', []],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
