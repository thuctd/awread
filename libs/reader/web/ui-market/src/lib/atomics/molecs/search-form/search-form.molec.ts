import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'molec-search-form',
  templateUrl: './search-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormMolec implements OnInit {
  filters: FormGroup;
  @Input() valueGenre = new FormControl('');
  @Input() valueStatus = new FormControl('');
  @Input() valuePublishedat = new FormControl('');

  @Output() searchEvent = new EventEmitter();
  @Input() genres = [
    { id: '1', name: 'Lãng mạn' },
    { id: '2', name: 'Kiếm hiệp' },
    { id: '3', name: 'Trinh thám' },
    { id: '4', name: 'Kinh dị' },
    { id: '5', name: 'Xuyên không' },
  ];
  @Input() selectGenres = {
    title: 'Thể Loại',
    widthClass: 'xl:w-96 lg:w-64 md:w-60',
  };

  @Input() selectStatus = {
    title: 'Tình Trạng',
    widthClass: 'xl:w-96 lg:w-80 md:w-64',
    options: [
      { id: '1', name: 'Đã hoàn thành' },
      { id: '2', name: 'Chưa hoàn thành' },
    ],
  };
  @Input() selectPublishedat = {
    title: 'Năm phát hành',
    widthClass: 'xl:w-60 lg:w-48 md:w-40',
    options: [
      { id: '1', name: '2000' },
      { id: '2', name: '2001' },
      { id: '3', name: '2002' },
      { id: '4', name: '2003' },
      { id: '5', name: '2004' },
    ],
  };

  constructor() { }

  ngOnInit(): void {
    this.filters = new FormGroup({
      genre: new FormControl(''),
      status: new FormControl(''),
      publishedat: new FormControl('')
    });
  }
}
