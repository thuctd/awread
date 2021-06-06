import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-info-prose',
  templateUrl: './list-info-prose.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host p {
        width: 190px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 20px;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoProseMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    bookId: '',
    authors: [],
  };
  @Input() chapters = [
    {
      chapterId: '',
      position: '',
    },
  ];
  @Input() isBtn = false;

  @Input() moreContent = 'Đọc thêm';

  @Output() moreEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
