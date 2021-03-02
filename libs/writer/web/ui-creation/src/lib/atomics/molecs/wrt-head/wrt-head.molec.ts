import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import {} from '@awread/writer/web/feature-auth';
import { MatDialog } from '@angular/material/dialog';
import { ReadTemplate } from '../../templates';

@Component({
  selector: 'wrt-head',
  templateUrl: './wrt-head.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtHeadMolec implements OnInit {
  _chapterStatus: string;
  @Input() formActiveStatus = false;
  @Output() changeChapterStatusEvent = new EventEmitter();
  @Input() set chapterStatus(value) {
    console.log('status: ', value);
    if (value) {
      this.selectedChapterStatus = value;
      this._chapterStatus = value;
    }
  }

  get chapterStatus() {
    return this._chapterStatus;
  }
  @Input() chapterForm: FormGroup = this.fb.group({
    bookTitle: ['test', Validators.required],
    chapterNumber: ['', Validators.required],
    bookImg: ['/global-assets/images/image.webp', Validators.required],
    status: ['', Validators.required],
  });

  @Input() shouldShowStatusUI: true;
  @Input() type: string;
  @Input() btns = [
    {
      submitText: 'Xuất bản',
      isActive: true,
      type: 'PUBLISHED',
    },
    {
      submitText: 'Lưu nháp',
      isActive: false,
      type: 'DRAFT',
    },
    // {
    //   submitText: 'Xem trước',
    //   isActive: false,
    //   type: 'PREVIEW',
    // },
  ];
  selectedChapterStatus = 'DRAFT';
  @Output() saveChapterEvent = new EventEmitter();
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.chapterForm.valueChanges.subscribe(() => {
      this.cd.detectChanges();
    });
  }
  changeChapterStatus(status: string) {
    if (status === 'PREVIEW') {
      this.openPreview();
      return;
    }
    this.changeChapterStatusEvent.emit(status);
  }

  openPreview(): void {
    this.openModalPreview(this.chapterForm.get('title').value, this.chapterForm.get('content').value);
  }

  openModalPreview(title: string, conent: string) {
    const dialogRef = this.matDialog.open(ReadTemplate, {
      width: '72rem',
      height: '42.5rem',
      data: {
        title: title,
        content: conent,
      },
    });

    return dialogRef.afterClosed();
  }
}
