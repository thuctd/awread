import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
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
  @Input() totalBook;
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
  @Output() moreBooks = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();
  constructor() { }

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
