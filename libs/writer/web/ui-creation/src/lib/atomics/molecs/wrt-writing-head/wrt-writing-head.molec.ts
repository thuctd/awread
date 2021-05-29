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

  ngOnChanges(changes) {
    // console.log("changes", changes.chapterForm?.currentValue.value.published);
    if (changes.chapterForm?.currentValue.value.published) {
      this.btns[0].hidden = true;
    }
  }

}
