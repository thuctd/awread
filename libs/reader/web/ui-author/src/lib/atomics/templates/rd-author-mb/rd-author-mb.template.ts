import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'template-rd-author-mb',
  templateUrl: './rd-author-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorMbTemplate implements OnInit {
  @Input() isFollow = true;
  @Input() isBlock = false;
  @Input() user;
  @Input() total;
  @Input() books = [];
  @Output() moreBooks = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
