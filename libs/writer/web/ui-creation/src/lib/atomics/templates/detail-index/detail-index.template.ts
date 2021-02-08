import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Category, Genre } from '@awread/writer/web/feature-auth';

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
    // {
    //   submitText: 'Tiếp tục',
    //   isActive: true,
    //   status: 'CONTINUE',
    // },
  ];

  @Input() chapters;
  @Input() tabsHead = [
    { name: 'Thông tin của truyện', tabName: 'book' },
    { name: 'Mục lục', tabName: 'toc' },
  ];
  @Input() bookForm: FormGroup = this.fb.group({
    img: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: ['', Validators.required],
    genreIds: ['', Validators.required],
    audience: ['', Validators.required],
    categoryid: ['', Validators.required],
    srcImg: [''],
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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.selectedBookStatus = this.bookForm.get('status').value;
    console.log('chapters: ', this.chapters);
  }

  selectBookStatus(status: string) {
    // this.selectedBookStatus = status;
    this.selectedStatusEvent.emit(status);
  }
}
