import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-rd-author-product',
  templateUrl: './rd-author-product.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorProductOrgan implements OnInit {
  @Input() books = [];
  @Input() hasNextPage: false | true = true;
  @Output() emitMoreBooks = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
