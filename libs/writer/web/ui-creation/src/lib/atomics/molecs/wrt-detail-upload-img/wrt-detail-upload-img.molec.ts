import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'wrt-detail-upload-img',
  templateUrl: './wrt-detail-upload-img.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailUploadImgMolec implements OnInit {
  @Input() book = {
    cover: 'https://picsum.photos/200/300'
  }

  @Input() btn = {
    name: 'Chỉnh sửa ảnh bìa',
    isActive: true,
  };

  @Output() eventChooseImageCover = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
