import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'wrt-detail-act',
  templateUrl: './wrt-detail-act.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailActMolec implements OnInit {
  @Input() chapter;
  @Output() chapterActionEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
