import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-list-tab-page',
  templateUrl: './rd-list-tab-page.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .tab:hover .show {
        display: block;
      }
      :host .bg-orange {
        background-color: #e6640d;
      }
      :host .triangle-down {
        width: 0;
        height: 0;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 8px solid #e6640d;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdListTabPageAtom implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Input() tabName = 'tab name';
  @Input() active = false;
  @Input() isTooltip = false;

  constructor() {}

  ngOnInit(): void {}
}
