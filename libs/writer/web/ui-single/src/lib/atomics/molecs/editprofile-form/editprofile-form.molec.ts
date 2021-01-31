import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'editprofile-form',
  templateUrl: './editprofile-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditprofileFormMolec implements OnInit {
  @Input() profileForm: FormGroup;
  @Input() submitted: boolean;
  items = [{ key: 'Tên' }, { key: 'Tên tài khoản' }, { key: 'Liên kết' }];

  constructor() { }

  ngOnInit(): void { }
}
