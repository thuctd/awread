import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wrt-book-img',
  templateUrl: './wrt-book-img.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookImgAtom implements OnInit {
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() chapterForm: FormGroup = this.fb.group({
    bookImg: ['/global-assets/images/image.webp', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
