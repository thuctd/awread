import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.molec.html',
  styleUrls: ['./login-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormMolec implements OnInit {
  icons = { faLock, faEnvelope };
  form = this.fb.group({
    email: '',
    password: ''
  })
    constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
