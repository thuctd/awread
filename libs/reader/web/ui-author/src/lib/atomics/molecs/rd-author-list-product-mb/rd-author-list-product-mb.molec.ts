import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'molec-rd-author-list-product-mb',
  templateUrl: './rd-author-list-product-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListProductMbMolec implements OnInit {
  @Input() authorId = '123456zxcasdwqe_zxxzc';
  @Input() books = [];
  @Input() class = 'text-sm text-green-primary';
  @Input() moreBook = 'Xem thêm...';
  @Input() btnTitle = 'Top phổ biến';
  @Output() moreEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
