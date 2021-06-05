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
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    website: ['', [Validators.required]],
    introduce: ['', [Validators.required]],
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

  constructor(public matDialog: MatDialog, private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void { }

  changeDisplay(mode: any) {
    this.mode = mode;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.cd.detectChanges();
  }
}
