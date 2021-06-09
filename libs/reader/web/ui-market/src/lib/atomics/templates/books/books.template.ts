import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-books',
  templateUrl: './books.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksTemplate implements OnInit {
  display = 'grid';
  @Input() titlePage;
  @Input() totalBook;
  @Input() loading;
  @Input() isMoreOffset;
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
  @Output() moreBooks = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay(mode: string) {
    this.display = mode;
  }

}
