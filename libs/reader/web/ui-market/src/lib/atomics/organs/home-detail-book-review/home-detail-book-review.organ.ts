import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'home-detail-book-review',
  templateUrl: './home-detail-book-review.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .top--04 {
        top: -0.4rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailBookReviewOrgan implements OnInit {
  @Input() page = {
    name: 'Top truyện được đánh giá tích cực',
    href: ['/index', 'good-books'],
  };
  @Input() books = [];
  @Input() book = {
    imgUrl: '',
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    id: '1',
  };
  @Input() displayUI = {
    ui: {
      isAuthor: false,
      isRating: true,
      isIcon: false,
      isDate: false,
    },
    size: {
      sizeTitle: 'm',
      sizeBtn: true,
    },
  };

  constructor() { }

  ngOnInit(): void { }
}
