import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-news-event-item',
  templateUrl: './rd-news-event-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsEventItemMolec implements OnInit {
  @Input() item = {
    srcImg: '/global-assets/images/Rectangle-487.webp',
    title: 'Siêu ưu đãi ngày hè hàng ngàn truyện hay miến phí',
  };
  @Input() newsId = 'bvxz_324988seQ6x';

  constructor() {}

  ngOnInit(): void {}
}
