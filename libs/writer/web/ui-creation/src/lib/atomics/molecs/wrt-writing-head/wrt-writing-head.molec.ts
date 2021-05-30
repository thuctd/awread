import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { } from '@awread/writer/web/feature-auth';
import { MatDialog } from '@angular/material/dialog';
import { WrtWritingPopupReadTemplate } from '../../templates';

@Component({
  selector: 'wrt-writing-head',
  templateUrl: './wrt-writing-head.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtWritingHeadMolec implements OnInit {
  @Input() book;
  @Input() chapterForm: FormGroup = this.fb.group({
    bookTitle: ['test', Validators.required],
    chapterNumber: ['', Validators.required],
    bookImg: ['/global-assets/images/image.webp', Validators.required],
    status: ['', Validators.required],
  });

  @Input() btns = [
    {
      submitText: 'Quay lại',
      isActive: false,
      action: 'back',
      hidden: false
    },
    {
      submitText: 'Xuất bản',
      isActive: true,
      action: 'publish',
      hidden: false
    },
    {
      submitText: 'Lưu',
      isActive: true,
      action: 'save',
      hidden: false
    },
    {
      submitText: 'Xem trước',
      isActive: false,
      action: 'preview',
      hidden: false
    },
  ];

  @Output() chapterActionEvent = new EventEmitter();
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }


}
