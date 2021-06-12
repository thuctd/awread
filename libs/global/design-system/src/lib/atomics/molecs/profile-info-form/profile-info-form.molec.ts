import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'molec-profile-info-form',
  templateUrl: './profile-info-form.molec.html',
  styleUrls: ['./profile-info-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoFormMolec implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({});
  @Input() submitted: boolean;
  @Input() inputControl = new FormControl('');
  @Input() inputFormItems = [
    {
      title: 'Họ',
      formControlName: 'lastname',
    },
    {
      title: 'Tên đệm',
      formControlName: 'middlename',
    },
    {
      title: 'Tên',
      formControlName: 'firstname',
    },
    {
      title: 'Email',
      formControlName: 'email',
    },
    {
      title: 'Số điện thoại',
      formControlName: 'phone',
    },
  ];

  @Input() selectItems = [
    {
      title: 'Giới tính',
      formControlName: 'gender',
      class: 'pl-4 pr-8 py-1 md:py-2',
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
    },
    {
      title: 'Giới hạn nội dung',
      formControlName: 'age',
      class: 'pl-4 pr-6 py-1 md:py-2',
      options: [
        {
          value: '1',
          text: '6-13',
        },
        {
          value: '2',
          text: '13-18',
        },
        {
          value: '3',
          text: '18+',
        },
      ],
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
