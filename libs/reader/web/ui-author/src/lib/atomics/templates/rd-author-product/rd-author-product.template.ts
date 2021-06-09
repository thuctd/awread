import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-rd-author-product',
  templateUrl: './rd-author-product.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorProductTemplate implements OnInit {
  @Input() items = [];
  @Input() books = [];
  @Input() loading;
  @Input() hasMore;
  @Output() emitMoreBooks = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
