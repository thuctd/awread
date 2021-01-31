import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Category, Genre } from '@awread/writer/web/feature-auth';
import { PopupEditCoverBookTemplate } from '../popup-edit-cover-book/popup-edit-cover-book.template';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'template-detail',
  templateUrl: './detail-index.template.html',
  styleUrls: ['./detail-index.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailIndexTemplate implements OnInit {
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
  ];

  @Input() chapters;
  @Input() tabsHead;
  @Input() bookForm: FormGroup;
  @Input() selectedTab: string;
  @Output() selectedStatusEvent = new EventEmitter();
  @Output() cancelCreateBook = new EventEmitter();
  @Output() bookSubmitEvent = new EventEmitter();
  @Output() chapterActionEvent = new EventEmitter();
  @Output() createNewChapterEvent = new EventEmitter();
  @Output() switchTabEvent = new EventEmitter();
  @Output() genresEvent = new EventEmitter();
  @Input() selectedBookStatus: string;
  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
    // this.selectedBookStatus = this.bookForm.get('status').value;
    console.log('chapters: ', this.chapters);
  }

  selectBookStatus(status: string) {
    // this.selectedBookStatus = status;
    this.selectedStatusEvent.emit(status);
  }
  eventChooseImageCover(event){
    this.matDialog.open(PopupEditCoverBookTemplate, {
      width: '55rem',
      height: '33rem'
    });
  }
}
