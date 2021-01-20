import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'template-detail',
  templateUrl: './detail-index.template.html',
  styleUrls: ['./detail-index.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailIndexTemplate implements OnInit {
  @Input() btns = [
    {
      submitText: 'Cancel',
      isActive: false,
      status: 'CANCEL',
    },
    {
      submitText: 'Skip',
      isActive: true,
      status: 'SKIP',
    },
  ];

  @Input() chapters;
  @Input() tabsHead;
  @Input() bookForm: FormGroup;
  @Input() selectedTab: string;
  @Output() selectedStatusEvent = new EventEmitter();
  @Output() bookSubmitEvent = new EventEmitter();
  @Output() chapterActionEvent = new EventEmitter();
  @Output() createNewChapterEvent = new EventEmitter();
  @Output() switchTabEvent = new EventEmitter();
  selectedBookStatus: string;
  constructor() {}

  ngOnInit(): void {
    this.selectedBookStatus = this.bookForm.get('status').value;
    console.log('chapters: ', this.chapters);
  }

  selectBookStatus(status: string) {
    this.selectedBookStatus = status;
    this.selectedStatusEvent.emit(status);
  }
}
