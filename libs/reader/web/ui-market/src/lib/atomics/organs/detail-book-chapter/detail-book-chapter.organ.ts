import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'organ-detail-book-chapter',
  templateUrl: './detail-book-chapter.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookChapterOrgan implements OnInit {
  icon = faAngleDown;
  @Output() submitEvent = new EventEmitter()
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

  constructor() { }

  ngOnInit(): void {
  }

}
