import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'molec-search-form',
  templateUrl: './search-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormMolec implements OnInit {
  @Input() valueSelect = new FormControl('');
  @Output() searchEvent = new EventEmitter();
  @Input() selectSearch = [{
    title: 'Thể Loại',
    widthClass: 'w-96',
    options: [
      { id: '1', name: 'Lãng mạn' },
      { id: '2', name: 'Kiếm hiệp' },
      { id: '3', name: 'Trinh thám' },
      { id: '4', name: 'Kinh dị' },
      { id: '5', name: 'Xuyên không' }
    ]
  }, {
    title: 'Tình Trạng',
    widthClass: 'w-96',
    options: [
      { id: '1', name: 'Đã hoàn thành' },
      { id: '2', name: 'Chưa hoàn thành' }
    ]
  }, {
    title: 'Năm phát hành',
    widthClass: 'w-60',
    options: [
      { id: '1', name: '2000' },
      { id: '2', name: '2001' },
      { id: '3', name: '2002' },
      { id: '4', name: '2003' },
      { id: '5', name: '2004' }]
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
