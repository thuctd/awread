import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-rd-search-book-mb',
  templateUrl: './rd-search-book-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSearchBookMbTemplate implements OnInit {
  @Input() title = 'Cô gái năm ấy chúng ta theo đuổi';
  @Input() faIcon = faSearch;
  @Output() submitSearchBtn = new EventEmitter();
  @Input() inputControl = new FormControl();
  @Input() items = [
    {
      title: 'Cô gái chúng ta cùng theo đuổi năm nào',
      bookId: '1',
      authors: [],
      updatedAt: '2021-05-03',
      category: 'Hành động',
    },
    {
      title: 'Cô gái chúng ta cùng theo đuổi năm nào',
      bookId: '1',
      authors: [],
      updatedAt: '2021-05-03',
      category: 'zui zẻ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
