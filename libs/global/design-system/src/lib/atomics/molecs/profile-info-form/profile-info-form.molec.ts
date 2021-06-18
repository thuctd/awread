import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-profile-info-form',
  templateUrl: './profile-info-form.molec.html',
  styleUrls: ['./profile-info-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoFormMolec implements OnInit {
  class = 'text-sm md:text-base cursor-pointer rounded-full text-white border-green-primary font-semibold py-1 md:py-2 px-6'
  @Input() faIcon = faChevronDown;
  @Input() genres = [];
  @Input() ages = [
    {
      id: '1',
      name: '6-13',
    },
    {
      id: '2',
      name: '13-18',
    },
    {
      id: '3',
      name: '18+',
    },
  ];
  @Input() connectGg = {
    title: 'Kết nối bằng google',
    image: '/global-assets/images/google.webp',
  };
  @Output() submitEvent = new EventEmitter();
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
    ages: ['2'],
    genreIds: [[]],
  });
  @Input() submitted: boolean;
  @Input() inputControl = new FormControl('');
  @Input() inputFormItems = [
    {
      title: 'Tên',
      formControlName: 'firstname',
    },
    {
      title: 'Tên đệm',
      formControlName: 'middlename',
    },
    {
      title: 'Họ',
      formControlName: 'lastname',
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

  @Input() selectMultiples = [
    {
      title: 'Gợi ý truyện theo sở thích',
      formControlName: 'genreIds',
      id: 'genreId',
      name: 'name'
    },
    {
      title: 'Giới hạn nội dung',
      formControlName: 'ages',
      id: 'id',
      name: 'name'
    }
  ]


  @Input() selectItems = {
    title: 'Giới tính',
    formControlName: 'gender',
    class: 'pl-4 pr-6 py-1 md:py-2',
    options: [
      {
        value: '0',
        text: 'Nam',
      },
      {
        value: '1',
        text: 'Nữ',
      },
      {
        value: '2',
        text: 'Khác',
      },
    ],
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
