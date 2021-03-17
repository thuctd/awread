import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-rd-author-submit-btn',
  templateUrl: './rd-author-submit-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorSubmitBtnAtom implements OnInit {
  @Input() class = 'bg-gray-300 text-gray-800 rounded-full py-1.5 px-3';
  @Input() text = 'Bỏ theo dõi';
  @Input() faIcon;

  @Output() submitBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
