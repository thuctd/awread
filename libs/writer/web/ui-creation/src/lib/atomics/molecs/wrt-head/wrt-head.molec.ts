import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'wrt-head',
  templateUrl: './wrt-head.molec.html',
  styleUrls: ['./wrt-head.molec.scss'],
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
  @Input() chapterForm: FormGroup;

  btns = [
    {
      submitText: 'Publish',
      isActive: true,
      type: 'PUBLISHED',
    },
    {
      submitText: 'Draft',
      isActive: false,
      type: 'DRAFT',
    },
    {
      submitText: 'Preview',
      isActive: false,
      type: 'PREVIEW',
    },
  ];
  selectedChapterStatus = 'DRAFT';
  constructor() {}

  ngOnInit(): void {}
  changeChapterStatus(status: string) {
    if (status === 'PREVIEW') {
      return;
    }
    this.changeChapterStatusEvent.emit(status);
  }
}
