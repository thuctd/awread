import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  @Input() filters: FormGroup;


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
      { id: '2000', name: '2000' },
      { id: '2001', name: '2001' },
      { id: '2002', name: '2002' },
      { id: '2003', name: '2003' },
      { id: '2004', name: '2004' },
    ],
  };
  @Output() filterBooksEvent = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filters = this.fb.group({
      category: [''],
      genre: [''],
      status: [''],
      publishedAt: ['']
    });
  }
}
