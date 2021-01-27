import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import {faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-detail-book-review-actions',
  templateUrl: './detail-book-review-actions.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookReviewActionsMolec implements OnInit {
  icons={ faHeart, faHeartBroken}
  @Output() submitEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
