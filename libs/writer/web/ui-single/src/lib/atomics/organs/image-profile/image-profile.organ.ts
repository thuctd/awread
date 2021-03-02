import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'image-profile',
  templateUrl: './image-profile.organ.html',
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
export class ImageProfileOrgan implements OnInit {
  @Input() imgSrc = '/global-assets/images/bigImg.webp';
  @Output() eventChangeImg = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
