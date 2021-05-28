import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-popup-cover-image',
  templateUrl: './popup-cover-image.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupCoverImageMolec implements OnInit {
  @Input() title = 'Chọn ảnh đại diện';
  @Input() status = 'pending';
  @Input() percentLoading = '50%';
  @Input() sourceTarget = '';
  @Input() controlName = new FormControl('');
  @Output() eventChooseImage = new EventEmitter();
  @Output() submitEvent = new EventEmitter();
  icon = faTimes;
  constructor() { }

  ngOnInit(): void { }
}
