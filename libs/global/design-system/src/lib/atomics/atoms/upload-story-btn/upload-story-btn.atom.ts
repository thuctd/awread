import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-upload-story-btn',
  templateUrl: './upload-story-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadStoryBtnAtom implements OnInit {
  @Input() href = [];

  constructor() {}

  ngOnInit(): void {}
}
