import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-social-share-fb-btn',
  templateUrl: './social-share-fb-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialShareFbBtnAtom implements OnInit {
  @Output() shareClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
