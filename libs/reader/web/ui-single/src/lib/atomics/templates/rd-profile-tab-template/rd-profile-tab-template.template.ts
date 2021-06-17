import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';
import { faCog, faUserCircle, faBookmark, faClock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
  @Input() faIcon = faArrowLeft;
  @Input() genres = [];
  @Input() age = [];
  @Input() requireForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    avatar: [false]
  });
  @Input() optionalForm: FormGroup = this.fb.group({
    firstname: [''],
    middlename: [''],
    lastname: [''],
    bio: [''],
    websiteAddress: [''],
    facebookAddress: [''],
    dob: [''],
  });
  @Input() experienceForm: FormGroup = this.fb.group({
    gender: [''],
    age: ['2'],
    genreIds: [[]],
  });
  @Input() currentUser = {};
  @Input() submitted: boolean;
  @Output() submitEvent = new EventEmitter();
  @Input() mode: 'display' | 'edit' = 'display';
  @Input() actions = ['display', 'edit'];
  @Input() tabsDesktop = [
    {
      name: 'Hồ sơ của tôi',
      isActive: true,
      faIcon: faUserCircle,
      href: null,
    },
    // {
    //   name: 'Cài đặt',
    //   isActive: false,
    //   faIcon: faCog,
    //   href: '/single/setting',
    // },
  ];

  @Input() tabsMobile = [
    {
      name: 'Hồ sơ của tôi',
      isActive: true,
      faIcon: faUserCircle,
      href: null,
    },
    // {
    //   name: 'Truyện đã lưu',
    //   isActive: false,
    //   faIcon: faBookmark,
    //   href: '/',
    // },
    // {
    //   name: 'Lịch sử đọc',
    //   isActive: false,
    //   faIcon: faClock,
    //   href: '/',
    // },
    // {
    //   name: 'Cài đặt',
    //   isActive: false,
    //   faIcon: faCog,
    //   href: '/single/setting',
    // },
  ];
  @Input() class2 = 'flex justify-start items-center';
  @Input() classActive = 'col-span-12 text-green-primary';
  @Input() classNormal = 'col-span-12 text-gray-text font-medium';

  constructor(public matDialog: MatDialog, private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void { }

  changeModeEdit(mode: any) {
    this.mode = mode;
  }
}
