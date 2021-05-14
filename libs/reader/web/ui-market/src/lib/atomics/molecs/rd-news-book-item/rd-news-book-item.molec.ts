import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-news-book-item',
  templateUrl: './rd-news-book-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsBookItemMolec implements OnInit {
  @Input() newsId = 'bvxz_324988seQ6x';
  @Input() item = {
    date: 'May 05 2021',
    status: {
      text: 'hot',
      bgColor: 'red-400',
    },
    description: {
      title: 'Tạm dừng',
      content: 'Hình như tau thích mi',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
