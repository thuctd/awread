import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  @Input() filtersForm: FormGroup = this.fb.group({
    typeBook: [''],
    category: [''],
    genre: [''],
    status: [''],
    publishedAt: ['']
  });
  @Input() books = [];
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
    { name: 'Truyện dài', type: 'longbook', isActive: true },
  ];

  @Input() selectedTab = 'longbook';
  @Output() switchTabEvent = new EventEmitter();
  @Output() eventSearch = new EventEmitter();
  @Output() changeCategoryBooks = new EventEmitter();
  @Output() filterBooksEvent = new EventEmitter();
  @Output() nativeProse = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();
  @Output() nativeLongBook = new EventEmitter();
  @Output() nativeShortBook = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  changeDisplay(mode: string) {
    this.display = mode;
  }

  changeDisplayFilter() {
    this.filterbook = !this.filterbook;
  }
}
