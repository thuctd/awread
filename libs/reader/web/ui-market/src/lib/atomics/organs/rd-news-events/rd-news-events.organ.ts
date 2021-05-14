import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-news-events',
  templateUrl: './rd-news-events.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsEventsOrgan implements OnInit {
  @Input() event1 = {
    srcImg: '/global-assets/images/Rectangle-487.webp',
    altImg: 'image',
    title: 'Siêu ưu đãi ngày hè hàng ngàn truyện hay miến phí',
  };
  @Input() event2 = {
    srcImg: '/global-assets/images/Rectangle-488.webp',
    altImg: 'image',
    title: 'Nạp càng nhiều - Tặng càng nhiều',
  };

  constructor() {}

  ngOnInit(): void {}
}
