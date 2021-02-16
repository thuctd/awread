import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-home-tab-category',
  templateUrl: './rd-home-tab-category.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHomeTabCategoryAtom implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Input() tabName = 'tab name';
  @Input() active = false;

  constructor() {}

  ngOnInit(): void {}
}
