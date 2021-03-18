import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-profile-edit-form',
  templateUrl: './wrt-profile-edit-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtProfileEditFormMolec implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    website: ['', [Validators.required]],
    introduce: ['', [Validators.required]],
  });
  @Input() submitted: boolean;
  items = [{ key: 'Tên' }, { key: 'Tên tài khoản' }, { key: 'Liên kết' }];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
