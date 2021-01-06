import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-info-book-review',
  templateUrl: './home-info-book-review.molec.html',
  styleUrls: ['./home-info-book-review.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeInfoBookReviewMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    isSize: true,
  };

  @Input() btns = [
    {
      chapter: 'Chương 1',
      isSize: true,
    }, {
      chapter: 'Chương 2',
      isSize: true,
    }];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
