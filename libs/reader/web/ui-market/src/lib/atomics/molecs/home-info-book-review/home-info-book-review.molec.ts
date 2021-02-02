import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-info-book-review',
  templateUrl: './home-info-book-review.molec.html',
  styleUrls: ['./home-info-book-review.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeInfoBookReviewMolec implements OnInit {
  @Input() size = 'm';
  @Input() isSize = 'true';
  @Input() book = 'Cô gái chúng ta cùng theo đuổi năm nào';

  @Input() btns = ['Chương 1', 'Chương 2'];
  @Output() submitEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
