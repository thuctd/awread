import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-author-content-popup-unfollow',
  templateUrl: './rd-author-content-popup-unfollow.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorContentPopupUnfollowOrgan implements OnInit {
  @Input() name = 'Cam Thuong';

  constructor() {}

  ngOnInit(): void {}
}
