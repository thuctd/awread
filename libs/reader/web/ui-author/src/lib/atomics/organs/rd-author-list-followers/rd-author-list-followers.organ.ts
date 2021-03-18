import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-author-list-followers',
  templateUrl: './rd-author-list-followers.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListFollowersOrgan implements OnInit {
  @Input() counter = Array;

  constructor() {}

  ngOnInit(): void {}
}
