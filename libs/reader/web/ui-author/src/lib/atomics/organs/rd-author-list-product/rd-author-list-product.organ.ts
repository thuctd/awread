import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-rd-author-list-product',
  templateUrl: './rd-author-list-product.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListProductOrgan implements OnInit {
  @Input() books = [];
  @Output() emitMoreBooks = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
