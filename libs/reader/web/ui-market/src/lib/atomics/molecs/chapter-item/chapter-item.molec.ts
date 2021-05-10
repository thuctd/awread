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
  @Input() bookId = '123453_Assxzxc';
  @Input() chapter = {
    chapterId: 'cef41fde-401c-42c8-887b-6642c6166039',
    title: 'Ngày ấy vì ai mà đổi thay',
    price: 'Miễn phí',
    createdAt: "2021-06-07T16:12:16",
    updatedAt: "2021-06-09T16:12:16",
    published: true,
    chapterNumber: 1
  };
  constructor() { }

  ngOnInit(): void { }
}
