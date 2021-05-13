import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

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
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
