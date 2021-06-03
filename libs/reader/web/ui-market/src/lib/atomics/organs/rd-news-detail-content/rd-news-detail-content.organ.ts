import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-rd-news-detail-content',
  templateUrl: './rd-news-detail-content.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsDetailContentOrgan implements OnInit {
  @Input() newsDetail = {
    title: '',
    image: '',
    updatedAt: '',
    content: '',
  };
  @Input() content = `Đây là nội dung`;

  constructor() {}

  @Output() ShareClicked = new EventEmitter();

  ngOnInit(): void {}
}
