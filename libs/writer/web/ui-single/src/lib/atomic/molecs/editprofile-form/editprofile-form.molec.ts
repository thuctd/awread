import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'editprofile-form',
  templateUrl: './editprofile-form.molec.html',
  styleUrls: ['./editprofile-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditprofileFormMolec implements OnInit {
  items = [{ key: 'Tên' }, { key: 'Tên tài khoản' }, { key: 'Trang mạng' }];

  constructor() {}

  ngOnInit(): void {}
}
