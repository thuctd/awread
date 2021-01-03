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
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtHeadMolec implements OnInit {
  _chapterStatus: string;
  @Input() formActiveStatus = false;
  @Output() chapterStatusEvent = new EventEmitter();
  @Input() set chapterStatus(value) {
    console.log('status: ', value);
    if (value) {
      this.selectedChapterStatus = value;
      this._chapterStatus = value;
    }
  }
  @Input() chapterForm: FormGroup;

  // _chapterForm: FormGroup;
  // @Input() set chapterForm(form) {
  //   this.selectedChapterStatus = form.get('status').value ?? 'DRAFT';
  //   this._chapterForm = form;
  // }

  // get chapterForm() {
  //   return this._chapterForm;
  // }

  get chapterStatus() {
    return this._chapterStatus;
  }
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
}
