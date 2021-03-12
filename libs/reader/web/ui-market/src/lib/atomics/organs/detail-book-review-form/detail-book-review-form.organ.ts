import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'organ-detail-book-review-form',
  templateUrl: './detail-book-review-form.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookReviewFormOrgan implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() inputControl: FormControl = new FormControl('');
  @Input() photoUrl = '/global-assets/images/2.webp';
  constructor() {}

  ngOnInit(): void {}
}
