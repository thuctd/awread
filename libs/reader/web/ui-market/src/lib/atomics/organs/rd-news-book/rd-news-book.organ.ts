import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-news-book',
  templateUrl: './rd-news-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsBookOrgan implements OnInit {
  @Input() title = 'Điểm tin sách';
  @Input() newsLeft = [
    {
      title: '',
      updatedAt: '',
      status: '',
      image: '',
      newsId: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
