import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wrt-detail-review',
  templateUrl: './wrt-detail-review.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtDetailReviewMolec implements OnInit {
  @Input() chapterCountView = '696969k';
  @Input() chapterCountComments = '2020-12-16';
  @Input() faIcon = faComments;
  constructor() {}

  ngOnInit(): void {}
}
