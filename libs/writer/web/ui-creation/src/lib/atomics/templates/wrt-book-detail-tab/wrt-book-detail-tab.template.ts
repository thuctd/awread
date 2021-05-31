import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';

@Component({
  selector: 'template-wrt-book-detail-tab',
  templateUrl: './wrt-book-detail-tab.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookDetailTabTemplate implements OnInit {
  @Input() categories;
  @Input() genres;
  @Input() book;
  @Input() chapters;

  @Input() tabsHead = [];

  @Output() detailBookEvent = new EventEmitter();

  @Input() bookForm: FormGroup = this.fb.group({
    img: ['/global-assets/images/image.webp'],
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: ['', Validators.required],
    genreIds: ['', Validators.required],
    audience: [null, Validators.required],
    categoryid: [null, Validators.required],
    srcImg: ['/global-assets/images/image.webp'],
  });

  constructor(public matDialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void { }

  eventChooseImageCover(event) {
    this.matDialog.open(PopupChangeCoverOrgan, {
      width: '55rem',
      height: '33rem',
    });
  }

  wtf(event) {
    this.detailBookEvent.emit(event);
  }
}
