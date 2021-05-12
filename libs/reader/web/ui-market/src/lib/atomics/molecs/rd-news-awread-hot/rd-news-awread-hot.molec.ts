import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-news-awread-hot',
  templateUrl: './rd-news-awread-hot.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsAwreadHotMolec implements OnInit {
  @Input() srcImg = '/global-assets/images/Rectangle-492.webp';

  @Input() content = {
    title: 'Giá Coin giảm không phanhh',
    excerpt: 'Nhiều thanh niên nhày cầu',
  };
  @Input() status = {
    bgColor: 'red-400',
    text: 'hot',
  };

  constructor() {}

  ngOnInit(): void {}
}
