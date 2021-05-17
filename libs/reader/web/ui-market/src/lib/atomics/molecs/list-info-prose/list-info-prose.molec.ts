import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-info-prose',
  templateUrl: './list-info-prose.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoProseMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    bookId: '',
  };
  @Input() isBtn = false;

  @Input() moreContent = 'Đọc thêm';

  @Output() moreEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
