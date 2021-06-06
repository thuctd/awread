import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';
import { faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-rd-profile-tab-template',
  templateUrl: './rd-profile-tab-template.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdProfileTabTemplateTemplate implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    dob: [''],
    age: [''],
    gender: [''],
    fullname: [''],
    username: [''],
    website: [''],
    introduce: [''],
  });
  @Input() currentUser = {};
  @Input() submitted: boolean;
  @Output() submitEvent = new EventEmitter();
  @Input() mode: 'display' | 'edit' = 'display';
  @Input() actions = ['display', 'edit'];
  @Input() tabs = [
    {
      name: 'Hồ sơ của tôi',
      isActive: true,
      faIcon: faUserCircle,
      href: null,
    },
    {
      name: 'Cài đặt',
      isActive: false,
      faIcon: faCog,
      href: '/single/setting',
    },
  ];
  @Input() classActive = 'border-b-2 border-green-primary text-green-primary';
  @Input() classNormal = 'text-gray-text font-medium';

  constructor(public matDialog: MatDialog, private fb: FormBuilder, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  changeModeEdit(mode: any) {
    this.mode = mode;
  }

  updateForm(mode: any) {
    if (this.profileForm.invalid) {
      return;
    } else {
      this.mode = mode;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      this.cd.detectChanges();
    }
  }
}
