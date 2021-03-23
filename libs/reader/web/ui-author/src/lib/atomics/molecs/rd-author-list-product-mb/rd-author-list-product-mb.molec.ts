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
  @Input() storys = [
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
  ];
  @Input() moreBook = 'Xem thêm...';
  @Input() btnTitle = 'Top phổ biến';
  @Output() moreEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
