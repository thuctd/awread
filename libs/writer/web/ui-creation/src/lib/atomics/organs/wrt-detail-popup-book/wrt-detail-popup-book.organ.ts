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
  @Input() srcImg = 'https://tailwindcss.com/img/card-left.jpg';

  constructor() {}

  ngOnInit(): void {}
}
