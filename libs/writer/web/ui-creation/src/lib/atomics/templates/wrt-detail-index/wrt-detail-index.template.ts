import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Category, Genre } from '@awread/writer/web/feature-auth';
import { MatDialog } from '@angular/material/dialog';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';

@Component({
  selector: 'wrt-template-detail',
  templateUrl: './wrt-detail-index.template.html',
  styleUrls: ['./wrt-detail-index.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailIndexTemplate implements OnInit {
  @Input() submitted: boolean;
  @Input() categories: Category[];
  @Input() genres: Genre[];
  @Input() bookId: string;
  @Input() btns = [
    {
      submitText: 'Hủy bỏ',
      isActive: false,
      status: 'CANCEL',
    },
    {
      submitText: 'Tiếp tục',
      isActive: true,
      status: '',
    },
  ];

  @Input() chapters;
  @Input() tabsHead = [
    { name: 'THÔNG TIN TRUYỆN', tabName: 'book' },
    { name: 'MỤC LỤC', tabName: 'toc' },
  ];
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
  @Input() selectedTab = 'book';
  @Output() selectedStatusEvent = new EventEmitter();
  @Output() cancelCreateBook = new EventEmitter();
  @Output() bookSubmitEvent = new EventEmitter();
  @Output() chapterActionEvent = new EventEmitter();
  @Output() createNewChapterEvent = new EventEmitter();
  @Output() switchTabEvent = new EventEmitter();
  @Output() genresEvent = new EventEmitter();
  @Input() selectedBookStatus: string;
  constructor(public matDialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.selectedBookStatus = this.bookForm.get('status').value;
    console.log('chapters: ', this.chapters);
  }

  selectBookStatus(status: string) {
    // this.selectedBookStatus = status;
    this.selectedStatusEvent.emit(status);
  }
  eventChooseImageCover(event) {
    this.matDialog.open(PopupChangeCoverOrgan, {
      width: '55rem',
      height: '33rem',
    });
  }
}
