import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-books-grid',
  templateUrl: './books-grid.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksGridOrgan implements OnInit {
  @Input() book = {
    bookId: '',
    title: 'Em là nhà',
    cover: '',
  };
  @Input() chapters = [];
  @Input() displayUI = {
    ui: {
      isAuthor: true,
      isRating: true,
      isIcon: true,
      isDate: true,
    },
    size: {
      sizeTitle: 'm',
      sizeBtn: true,
    },
  };

  @Input() classLayout1 = 'col-span-5';
  @Input() classLayout2 = 'col-span-6';

  constructor() {}

  ngOnInit(): void {}
}
