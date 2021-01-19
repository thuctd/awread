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
    widthClass: 'w-96'
  }, {
    title: 'Tình Trạng',
    widthClass: 'w-96'
  }, {
    title: 'Năm phát hành',
    widthClass: 'w-64'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
