import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-block-mb',
  templateUrl: './rd-author-popup-block-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupBlockMbTemplate implements OnInit {
  @Output() clickBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
