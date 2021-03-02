import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'change-photo',
  templateUrl: './change-photo.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePhotoMolec implements OnInit {
  @Input() imgSrc = '/global-assets/images/smailImg.webp';
  @Output() eventChangeImg = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
