import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-rd-author',
  templateUrl: './rd-author.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorTemplate implements OnInit {
  @Input() isFollow = true;
  @Input() isBlock = false;
  @Input() total;
  @Input() user;
  @Input() books = [];
  @Input() items = [];
  @Input() hasMore;
  @Output() emitMoreBooks = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
