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
  @Input() blogId;
  @Input() srcImg = '/global-assets/images/Rectangle-492.webp';
  @Input() status = 'HOT';
  @Input() title = 'Giá Coin giảm không phanhh';
  @Input() description = 'Nhiều thanh niên nhảy cầu';
  @Input() date = '';

  constructor() {}

  ngOnInit(): void {}
}
