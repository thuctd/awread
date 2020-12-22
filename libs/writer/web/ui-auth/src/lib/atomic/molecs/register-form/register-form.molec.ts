import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.molec.html',
  styleUrls: ['./register-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormMolec implements OnInit {
  icons = { faLock, faEnvelope, faUser };
  form = this.fb.group({
    fullname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]]
  })
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
