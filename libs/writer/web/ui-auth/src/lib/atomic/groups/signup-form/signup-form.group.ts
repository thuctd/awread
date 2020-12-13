import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.group.html',
  styleUrls: ['./signup-form.group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupFormGroup implements OnInit {
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
