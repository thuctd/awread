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
      @media only screen and (min-width: 460px) and (max-width: 640px) {
        :host .ml {
          margin-left: 2.5rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListBookReviewMobileOrgan implements OnInit {
  @Input() titlePage = 'Top truyện được đánh giá tích cực';
  counter = Array;
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';
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
