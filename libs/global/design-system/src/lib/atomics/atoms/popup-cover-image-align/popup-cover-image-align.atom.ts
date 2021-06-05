import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'atom-popup-cover-image-align',
  templateUrl: './popup-cover-image-align.atom.html',
  styles: [
    `
      :host {
        display: block;
      }

      ::ng-deep image-cropper .cropper .move  {
          z-index: 9999;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupCoverImageAlignAtom implements OnInit {
  @Input() sourceTarget = '/global-assets/images/bigImg.webp';
  @Output() submitEvent = new EventEmitter();
  icon = faArrowsAlt;
  @Input() aspectRatio;
  @Input() imageChangedEvent;
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded(image: LoadedImage) {
    console.log('image', image);
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  constructor() { }

  ngOnInit(): void { }
}
