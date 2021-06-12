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
  @Input() profileForm: FormGroup = this.fb.group({});
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
      title: 'Liên kết',
      formControlName: 'websiteAddress',
    },
    {
      title: 'Facebook',
      formControlName: 'facebookAddress',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
