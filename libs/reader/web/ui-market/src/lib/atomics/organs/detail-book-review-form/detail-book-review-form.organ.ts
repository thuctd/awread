import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'organ-detail-book-review-form',
  templateUrl: './detail-book-review-form.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookReviewFormOrgan implements OnInit {
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
