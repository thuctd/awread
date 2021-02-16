import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faBookmark, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-icon-text-button',
  templateUrl: './icon-text-button.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTextButtonAtom implements OnInit {
  @Input() icon = faBookmark;
  @Input() title = 'Lưu truyện';
  @Output() submitEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
