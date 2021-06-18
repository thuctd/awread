import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'molec-wrt-filter-book-form',
  templateUrl: './wrt-filter-book-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtFilterBookFormMolec implements OnInit {
  @Input() filters: FormGroup = this.fb.group({
    categoryId: [''],
    completed: [''],
  });

  @Input() selectCategory = {
    title: 'Danh mục',
    widthClass: 'xl:w-60 md:w-48',
    options: [
      { id: '1', name: 'Truyện ngắn' },
      { id: '2', name: 'Truyện dài' },
      { id: '3', name: 'Tản văn' },
    ],
  };

  @Input() selectStatus = {
    title: 'Tình trạng',
    widthClass: 'xl:w-60 md:w-48',
    options: [
      { id: '', name: 'Tất cả' },
      { id: '0', name: 'Chưa hoàn thành' },
      { id: '1', name: 'Đã hoàn thành' },
    ],
  };

  @Output() filterBooksEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
