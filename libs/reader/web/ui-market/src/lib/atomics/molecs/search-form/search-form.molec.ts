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
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormMolec implements OnInit {
  @Input() valueSelect = new FormControl('');
  @Output() searchEvent = new EventEmitter();
  @Input() selectSearch = [
    {
      title: 'Thể Loại',
      widthClass: 'xl:w-96 lg:w-80 md:w-64',
    },
    {
      title: 'Tình Trạng',
      widthClass: 'xl:w-96 lg:w-80 md:w-64',
    },
    {
      title: 'Năm phát hành',
      widthClass: 'xl:w-60 lg:w-48 md:w-40',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
