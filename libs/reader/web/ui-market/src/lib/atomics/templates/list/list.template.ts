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
  @Input() filtersForm: FormGroup;
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
  @Input() tabAll = {
    name: "Tất cả",
    categoryId: "",
  };
  @Input() tabsHead = [];

  @Input() selectedTabCategoryId = '1';
  @Output() switchTabEvent = new EventEmitter();
  @Output() eventSearch = new EventEmitter();
  @Output() changeCategoryBooks = new EventEmitter();
  @Output() filterBooksEvent = new EventEmitter();
  @Output() moreBooks = new EventEmitter();
  @Output() toggleFilterEvent = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  changeDisplay(mode: string) {
    this.display = mode;
  }

  changeDisplayFilter() {
    this.filterbook = !this.filterbook;
    this.toggleFilterEvent.emit(this.filterbook);
    this.initForm();
  }

  initForm() {
    this.filtersForm = this.fb.group({
      typeBook: [''],
      genres: [''],
      criteria: [''],
      status: [''],
      postingDate: [''],
    });
  }

  filterTopBooks() {
    this.filtersForm.controls['criteria'].setValue('1');
    this.filtersForm.controls['postingDate'].setValue(7);
    this.filterbook = true;
  }
}
