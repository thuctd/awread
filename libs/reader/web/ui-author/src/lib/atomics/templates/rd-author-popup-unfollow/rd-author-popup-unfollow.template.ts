import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-unfollow',
  templateUrl: './rd-author-popup-unfollow.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupUnfollowTemplate implements OnInit {
  @Input() name = 'Cam Thuong';

  constructor() {}

  ngOnInit(): void {}
}
