import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'organ-wrt-book-detail-tab',
  templateUrl: './wrt-book-detail-tab.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookDetailTabOrgan implements OnInit {
  @Input() bookId;
  @Input() bookForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: ['', Validators.required],
    genreIds: ['', Validators.required],
    audience: ['', Validators.required],
    categoryid: ['', Validators.required],
  });

  @Input() tabsHead = [];

  @Output() detailBookEvent = new EventEmitter();

  @Input() categories;
  @Input() genres;
  @Output() bookSubmitEvent = new EventEmitter();
  @Output() genresEvent = new EventEmitter();
  @Output() cancelCreateBook = new EventEmitter();
  @Output() confirmCreateBook = new EventEmitter();
  @Input() submitted: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
