import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-book-item',
  templateUrl: './rd-author-book-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorBookItemMolec implements OnInit {
  @Input() srcImg = '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp';
  @Input() alt = '';
  @Input() category = 'Hành động, phiêu lưu';
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    bookId: '1',
    authors: [],
    updatedAt: '2021-05-03',
  };
  @Input() bookId = 'bvxz_324345seQ6x';

  @Input() displayUIMobile = {
    ui: {
      isAuthor: true,
      isRating: true,
      isIcon: true,
      isDate: true,
    },
    size: {
      sizeTitle: 's',
      sizeBtn: false,
    },
  };

  @Input() displayUIDesktop = {
    ui: {
      isAuthor: true,
      isRating: true,
      isIcon: true,
      isDate: true,
    },
    size: {
      sizeTitle: 'm',
      sizeBtn: true,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
