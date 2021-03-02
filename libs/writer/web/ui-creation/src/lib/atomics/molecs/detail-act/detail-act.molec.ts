import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'detail-act',
  templateUrl: './detail-act.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailActMolec implements OnInit {
  @Input() chapter;
  @Output() chapterActionEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
