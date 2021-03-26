import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-rd-author-tab-page-mb',
  templateUrl: './rd-author-tab-page-mb.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorTabPageMbOrgan implements OnInit {
  @Input() numberProduct = '5';
  @Input() followers = '10';
  @Output() moreBooks = new EventEmitter();
  tabs = [
    { name: `${this.numberProduct} Tác phẩm`, isActive: true },
    {
      name: `${this.followers} Người theo dõi`,
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
