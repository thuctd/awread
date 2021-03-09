import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-btn-input-file',
  templateUrl: './btn-input-file.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnInputFileAtom implements OnInit {
  @Input() controlName = new FormControl('');
  @Input() title = 'Chọn hình ảnh từ thiết bị của bạn.';
  @Output() eventChooseImage = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
