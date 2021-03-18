import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wrt-profile-image',
  templateUrl: './wrt-profile-image.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .-mt28 {
        margin-top: -28rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtProfileImageOrgan implements OnInit {
  @Input() imgSrc = '/global-assets/images/bigImg.webp';
  @Output() eventChangeImg = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
