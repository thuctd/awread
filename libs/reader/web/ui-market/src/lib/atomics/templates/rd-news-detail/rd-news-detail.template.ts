import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-rd-news-detail',
  templateUrl: './rd-news-detail.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsDetailTemplate implements OnInit {
  @Input() content;
  @Input() newsDetail;
  @Input() newsOthers = [];
  @Output() shareClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
