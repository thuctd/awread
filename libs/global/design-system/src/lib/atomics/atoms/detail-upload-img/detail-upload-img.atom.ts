import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-upload-img',
  templateUrl: './detail-upload-img.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailUploadImgAtom implements OnInit {
  @Input() srcImg = '/global-assets/images/image.webp';

  constructor() {}

  ngOnInit(): void {}
}
