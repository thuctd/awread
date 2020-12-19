import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'editprofile-form',
  templateUrl: './editprofile-form.molec.html',
  styleUrls: ['./editprofile-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditprofileFormMolec implements OnInit {
  items = [{ key: 'Name' }, { key: 'Username' }, { key: 'Website' }];

  constructor() {}

  ngOnInit(): void {}
}
