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
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ModalFacade } from '@awread/writer/web/feature-auth';

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
    private modalFacade: ModalFacade) { }

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
    this.modalFacade.openPreview(this.chapterForm.get('title').value, 
                this.chapterForm.get('content').value);
  }
}
