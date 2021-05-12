import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-chapter-item',
  templateUrl: './chapter-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterItemMolec implements OnInit {
  @Input() isLastItem = false;
  @Input() chapter = {
    chapterId: "1",
    bookId: "1",
    position: "1",
    chapterNumber: 'Chương 1',
    title: 'Ngày ấy vì ai mà đổi thay',
    price: 'Miễn phí',
    createdAt: '09-09-2020',
    updatedAt: '09-09-2020',
  };
  constructor() { }

  ngOnInit(): void { }
}
