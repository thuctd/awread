import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-book-item',
  templateUrl: './rd-author-book-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .text-06 {
        font-size: 0.6rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorBookItemMolec implements OnInit {
  @Input() srcImg = '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp';
  @Input() alt = '';
  @Input() category = 'Hành động, phiêu lưu';
  @Input() book = 'Cô gái mà chúng ta theo đuổi năm nào';

  constructor() {}

  ngOnInit(): void {}
}
