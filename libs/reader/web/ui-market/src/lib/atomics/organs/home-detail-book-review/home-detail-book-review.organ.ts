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
  @Input() titlePage = 'Top truyện được đánh giá tích cực';
  @Input() books = [];

  constructor() { }

  ngOnInit(): void { }
}
