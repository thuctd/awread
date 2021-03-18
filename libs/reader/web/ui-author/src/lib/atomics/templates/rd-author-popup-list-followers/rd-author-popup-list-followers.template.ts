import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-followers',
  templateUrl: './rd-author-popup-list-followers.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupListFollowersTemplate implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
