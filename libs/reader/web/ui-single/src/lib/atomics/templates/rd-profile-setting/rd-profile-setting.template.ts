import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';
import { faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'template-rd-profile-setting',
  templateUrl: './rd-profile-setting.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdProfileSettingTemplate implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    website: ['', [Validators.required]],
    introduce: ['', [Validators.required]],
  });
  @Input() currentUser;
  @Input() submitted: boolean;
  @Output() updateProfileEvent = new EventEmitter();
  @Output() ClickConnect = new EventEmitter();
  @Input() mode = 'display';
  @Input() tabs = [
    {
      name: 'Hồ sơ của tôi',
      isActive: true,
      faIcon: faUserCircle,
    },
    {
      name: 'Cài đặt',
      isActive: false,
      faIcon: faCog,
    },
  ];
  @Input() classActive = 'border-b-2 border-green-primary text-green-primary';
  @Input() classNormal = 'text-gray-text font-medium';

  constructor(public matDialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {}

  eventChooseImageCover(event) {
    this.matDialog.open(PopupChangeCoverOrgan, {
      width: '55rem',
      height: '33rem',
    });
  }

  changeDisplay(mode: string) {
    this.mode = mode;
  }
}
