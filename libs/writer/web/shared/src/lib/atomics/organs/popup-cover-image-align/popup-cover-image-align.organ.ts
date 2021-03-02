import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'organ-popup-cover-image-align',
  templateUrl: './popup-cover-image-align.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupCoverImageAlignOrgan implements OnInit {
  @Input() sourceTarget = '/global-assets/images/bigImg.webp';
  @Output() submitEvent = new EventEmitter();
  icon = faArrowsAlt;
  constructor() {}

  ngOnInit(): void {}
}
