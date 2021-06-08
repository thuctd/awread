import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-home-list-book-review-mobile',
  templateUrl: './home-list-book-review-mobile.organ.html',
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
export class HomeListBookReviewMobileOrgan implements OnInit {
  @Input() page = {
    name: 'Top truyện được đánh giá tích cực',
    href: ['/good-books']
  };
  @Input() books = [];

  @Input() displayUI = {
    ui: {
      isAuthor: false,
      isRating: true,
      isIcon: false,
      isDate: false,
    },
    size: {
      sizeTitle: 's',
      sizeBtn: false,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
