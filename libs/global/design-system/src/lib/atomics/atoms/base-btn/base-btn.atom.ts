import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'base-btn',
  templateUrl: './base-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseBtnAtom implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() chapter = 'Chương 1';
  @Input() isSize = true;

  constructor() {}

  ngOnInit(): void {}
}
