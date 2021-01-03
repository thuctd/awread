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
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailIndexTemplate implements OnInit {
  @Input() btns = [
    {
      submitText: 'Draft',
      isActive: false,
      status: 'DRAFT',
    },
    {
      submitText: 'Publish',
      isActive: true,
      status: 'PUBLISHED',
    },
  ];

  @Input() chapters;

  @Input() bookForm: FormGroup;
  @Output() selectedStatusEvent = new EventEmitter();
  @Output() bookSubmitEvent = new EventEmitter();
  @Output() chapterActionEvent = new EventEmitter();
  @Output() createNewChapterEvent = new EventEmitter();
  selectedBookStatus: string;
  tabs = [
    { name: 'Tables of Contents', isActive: true },
    { name: 'Story Details' },
  ];

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
