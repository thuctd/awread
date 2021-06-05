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
  @Input() title = 'Siêu ưu đãi ngày hè hàng ngàn truyện hay miến phí';
  @Input() srcImg = '/global-assets/images/Rectangle-487.webp';

  @Input() blogId;
  @Input() class = '';

  constructor() {}

  ngOnInit(): void {}
}
