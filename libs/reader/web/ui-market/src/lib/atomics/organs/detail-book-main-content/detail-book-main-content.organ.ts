import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-detail-book-main-content',
  templateUrl: './detail-book-main-content.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookMainContentOrgan implements OnInit {
  @Input() chapters = [
    {
      id: "1",
      bookId: "1",
      chapterNumber: 'Chương 1',
      title: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020'
    }
  ]
  @Input() book = {};
  @Output() chapterFistEvent = new EventEmitter();
  @Output() chapterLastEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
