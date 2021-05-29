import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-info-book',
  templateUrl: './info-book.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBookMolec implements OnInit {
  @Input() displayUI = {
    ui: {
      isAuthor: false,
      isRating: false,
      isIcon: false,
      isDate: false,
    },
    size: {
      sizeTitle: 'm',
      sizeBtn: true,
    },
  };

  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    bookId: '1',
    authors: [],
    updatedAt: '2021-05-03'
  };

  @Input() btns = [
    {
      position: '1',
      chapterId: '',
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  orderByPosition(a, b) {
    // console.log('a, b', a, b);
    return b.value.position > a.value.position ? -1 : (a.value.position > b.value.position ? 1 : 0);
  }
}
