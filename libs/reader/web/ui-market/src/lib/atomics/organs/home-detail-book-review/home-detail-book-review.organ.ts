import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-home-detail-book-review',
  templateUrl: './home-detail-book-review.organ.html',
  styleUrls: ['./home-detail-book-review.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailBookReviewOrgan implements OnInit {
  @Input() isSize = 1;
  @Input() titlePage = 'Truyện nổi bật';
  counter = Array;

  constructor() { }

  ngOnInit(): void {
  }

}
