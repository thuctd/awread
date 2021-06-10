import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atom-rd-text-link-menu-mb',
  templateUrl: './rd-text-link-menu-mb.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdTextLinkMenuMbAtom implements OnInit {
  @Input() text = 'Trang chủ';
  @Input() link = '';
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
