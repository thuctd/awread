import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-unfollow-mb',
  templateUrl: './rd-author-popup-unfollow-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupUnfollowMbTemplate implements OnInit {
  @Input() name = 'Cẩm Thương';

  constructor() {}

  ngOnInit(): void {}
}
