import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-popup-cover-image-choose',
  templateUrl: './popup-cover-image-choose.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupCoverImageChooseAtom implements OnInit {
  @Input() controlName = new FormControl('');
  @Output() eventChooseImage = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
