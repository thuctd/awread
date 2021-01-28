import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReadTemplate } from '../../templates';

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
      submitText: 'Xuất bản',
      isActive: true,
      type: 'PUBLISHED',
    },
    {
      submitText: 'Phác thảo',
      isActive: false,
      type: 'DRAFT',
    },
    {
      submitText: 'Xem trước',
      isActive: false,
      type: 'PREVIEW',
    },
  ];
  selectedChapterStatus = 'DRAFT';
  @Output() saveChapterEvent = new EventEmitter();
  constructor(private cd: ChangeDetectorRef,
    public matDialog: MatDialog) { }

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

  openPreview() {
    this.matDialog.open(ReadTemplate, {
      width: '72rem',
      height: '42.5rem',
      data: {
        title: this.chapterForm.get('title').value,
        content: this.chapterForm.get('content').value
      },
    });
  }
}
