import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-menu-mb',
  templateUrl: './rd-author-popup-menu-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupMenuMbTemplate implements OnInit {
  @Output() clickBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
