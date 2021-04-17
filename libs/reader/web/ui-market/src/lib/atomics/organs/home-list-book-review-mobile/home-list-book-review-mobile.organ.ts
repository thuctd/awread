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
  @Input() titlePage = 'Top truyện được đánh giá tích cực';
  counter = Array;
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';
  @Input() books = [];

  constructor() { }

  ngOnInit(): void { }
}
