import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-rd-base-btn-green',
  templateUrl: './rd-base-btn-green.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdBaseBtnGreenAtom implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() title = 'Đăng nhập';
  @Input() class2 = 'px-3';

  constructor() {}

  ngOnInit(): void {}
}
