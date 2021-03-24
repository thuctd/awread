import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-target',
  templateUrl: './rd-introduction-target.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionTargetOrgan implements OnInit {
  @Input() items = {
    srcImg: '/global-assets/images/Group-844.webp',
    title: 'Thu nhập',
    number: 'USD',
    text: 'Thu nhập ổn định',
  };
  @Input() items2 = {
    srcImg: '/global-assets/images/Group-845.webp',
    title: 'Sự kiện',
    number: '100.000 +',
    text: 'Vô vàn event hàng tháng',
  };

  constructor() {}

  ngOnInit(): void {}
}
