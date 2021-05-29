import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-wrt-detail-toc-chapter-review',
  templateUrl: './wrt-detail-toc-chapter-review.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailTocChapterReviewMolec implements OnInit {
  @Input() chapterCountView = '696969k';
  @Input() chapterCountComments = '';
  @Input() faIcon = faComments;
  constructor() {}

  ngOnInit(): void {}
}
