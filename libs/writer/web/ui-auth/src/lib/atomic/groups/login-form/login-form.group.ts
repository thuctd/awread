import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.group.html',
  styleUrls: ['./login-form.group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormGroup implements OnInit {
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
