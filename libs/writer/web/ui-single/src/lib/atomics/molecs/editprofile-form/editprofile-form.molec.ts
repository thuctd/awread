import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'editprofile-form',
  templateUrl: './editprofile-form.molec.html',
  styleUrls: ['./editprofile-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditprofileFormMolec implements OnInit {
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
