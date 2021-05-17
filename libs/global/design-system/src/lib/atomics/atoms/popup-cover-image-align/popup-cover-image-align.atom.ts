import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-popup-cover-image-align',
  templateUrl: './popup-cover-image-align.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupCoverImageAlignAtom implements OnInit {
  @Input() sourceTarget = '/global-assets/images/bigImg.webp';
  @Output() submitEvent = new EventEmitter();
  icon = faArrowsAlt;
  constructor() {}

  ngOnInit(): void {}
}
