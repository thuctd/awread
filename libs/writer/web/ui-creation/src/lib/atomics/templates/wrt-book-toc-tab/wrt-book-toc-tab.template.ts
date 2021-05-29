import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';

@Component({
  selector: 'template-wrt-book-toc-tab',
  templateUrl: './wrt-book-toc-tab.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookTocTabTemplate implements OnInit {
  @Input() chapters;
  @Input() bookId;
  @Input() bookForm: FormGroup = this.fb.group({
    img: ['/global-assets/images/image.webp'],
  });

  @Input() chapterCouter = {
    chapterCountView: 0,
    chapterCountComments: 0,
  };

  @Input() tabsHead = [
    { name: 'THÔNG TIN TRUYỆN', href: ['../detail'], isActive: false },
    { name: 'MỤC LỤC', href: null, isActive: true },
  ];

  @Output() chapterActionEvent = new EventEmitter();
  @Output() createNewChapterEvent = new EventEmitter();
  constructor(public matDialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void { }

  eventChooseImageCover(event) {
    this.matDialog.open(PopupChangeCoverOrgan, {
      width: '55rem',
      height: '33rem',
    });
  }
}
