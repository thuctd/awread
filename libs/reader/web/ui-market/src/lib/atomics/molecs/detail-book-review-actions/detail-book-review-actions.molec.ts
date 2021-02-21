import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-detail-book-review-actions',
  templateUrl: './detail-book-review-actions.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookReviewActionsMolec implements OnInit {
  icons = { faHeart, faHeartBroken };
  @Input() src = '/global-assets/images/Group-687.webp';
  @Output() submitEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
