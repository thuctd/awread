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
export class DetailBookOrgan implements OnInit {
  @Input() srcImg = '/global-assets/images/card-left.webp';

  constructor() {}

  ngOnInit(): void {}
}
