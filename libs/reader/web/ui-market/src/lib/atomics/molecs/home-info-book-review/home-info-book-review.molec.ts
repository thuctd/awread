import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-info-book-review',
  templateUrl: './home-info-book-review.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeInfoBookReviewMolec implements OnInit {
  @Input() size = 'm';
  @Input() isSize = 'true';
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    bookId: '1',
  };

  @Input() btns = [{
    position: '1',
    chapterId: 'a8c80b60-acd6-4522-82cb-095d0ba677a7'
  }];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
