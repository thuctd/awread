import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    fullname: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
