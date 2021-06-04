import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-list',
  templateUrl: './list.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTemplate implements OnInit {
  display = 'grid';
  filterbook = false;
  @Input() loading;
  @Input() filtersForm: FormGroup = this.fb.group({
    typeBook: [''],
    genres: [''],
    criteria: [''],
    status: [''],
    postingDate: [''],
  });
  @Input() topBookList = [];
  @Input() categoryBooks = [];
  @Input() genres = [];
  @Input() actions = [
    {
      faIcon: faThLarge,
      display: 'grid',
      class: 'rounded-l-md',
    },
    {
      faIcon: faList,
      display: 'list',
      class: 'rounded-r-md',
    },
  ];
  @Input() titlePage: string;
  @Input() tabsHead = [
    { categoryId: 1, name: 'Truyện dài', type: 'longbook', isActive: true },
  ];

  @Input() selectedTabCategoryId = '1';
  @Output() switchTabEvent = new EventEmitter();
  @Output() eventSearch = new EventEmitter();
  @Output() changeCategoryBooks = new EventEmitter();
  @Output() filterBooksEvent = new EventEmitter();
  @Output() moreBooks = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  changeDisplay(mode: string) {
    this.display = mode;
  }

  changeDisplayFilter() {
    this.filterbook = !this.filterbook;
  }
}
