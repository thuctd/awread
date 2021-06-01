import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-top-books',
  templateUrl: './top-books.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBooksTemplate implements OnInit {
  display = 'grid';
  filterbook = false;
  @Input() filtersForm: FormGroup = this.fb.group({
    typeBook: [''],
    genres: [''],
    criteria: [''],
    status: [''],
    postingDate: [''],
  });
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
  @Input() books = [];
  @Output() eventSearch = new EventEmitter();
  @Output() changeCategoryBooks = new EventEmitter();
  @Output() filterBooksEvent = new EventEmitter();
  @Output() moreBooks = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeDisplay(mode: string) {
    console.log(mode);
    this.display = mode;
  }

  changeDisplayFilter() {
    this.filterbook = !this.filterbook;
  }
}
