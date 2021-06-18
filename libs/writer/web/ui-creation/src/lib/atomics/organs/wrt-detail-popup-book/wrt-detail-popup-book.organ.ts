import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-detail-book',
  templateUrl: './wrt-detail-popup-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }

      .h-132 {
        height: 33rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailPopupBookOrgan implements OnInit {
  @Input() title = 'Em là nhà!';
  @Input()
  description = `Tình yêu là chắp vá cùng nhau, người này thiếu cái này nhưng người kia sẽ bù lại theo quy luật bù trừ. Ở đời không ai hoàn hảo cả, cái hoàn hảo chính là vì nhau mà nhường nhịn, cố gắng bù đắp lại cho nhau...`;
  @Input() srcImg = '/global-assets/images/card-left.webp';

  constructor() {}

  ngOnInit(): void {}
}
