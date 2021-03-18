import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wrt-profile-change-photo',
  templateUrl: './wrt-profile-change-photo.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtProfileChangePhotoMolec implements OnInit {
  @Input() imgSrc = '/global-assets/images/smailImg.webp';
  @Output() eventChangeImg = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
