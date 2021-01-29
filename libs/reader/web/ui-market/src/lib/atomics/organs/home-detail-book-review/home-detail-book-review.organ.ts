import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'home-detail-book-review',
  templateUrl: './home-detail-book-review.organ.html',
  styleUrls: ['./home-detail-book-review.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailBookReviewOrgan implements OnInit {
  @Input() titlePage = 'Top truyện được đánh giá tích cực';
  counter = Array;

  constructor() { }

  ngOnInit(): void { }
}
