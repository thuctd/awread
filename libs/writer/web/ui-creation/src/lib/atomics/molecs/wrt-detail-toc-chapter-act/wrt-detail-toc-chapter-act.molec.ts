import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'molec-wrt-detail-toc-chapter-act',
  templateUrl: './wrt-detail-toc-chapter-act.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailTocChapterActMolec implements OnInit {
  @Input() chapter;
  @Output() chapterActionEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
