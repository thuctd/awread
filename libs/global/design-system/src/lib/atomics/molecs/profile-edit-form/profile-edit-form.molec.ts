import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-profile-edit-form',
  templateUrl: './profile-edit-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      .invalid-feedback {
        color: red;
        margin-top: 0.25rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditFormMolec implements OnInit {
  @Input() requireForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    avatar: [false]
  });
  @Input() submitted: boolean;
  @Input() items = [
    {
      title: 'Tên hiển thị',
      formControlName: 'name',
    },
    {
      title: 'Tên tài khoản',
      formControlName: 'username',
    },
    {
      title: 'Email',
      formControlName: 'email',
    },
    {
      title: 'Số điện thoại',
      formControlName: 'phone',
    },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
