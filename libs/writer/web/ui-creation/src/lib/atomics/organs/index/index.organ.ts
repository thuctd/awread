import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'index',
  templateUrl: './index.organ.html',
  styleUrls: ['./index.organ.scss'],
})
export class IndexOrgan implements OnInit {
  @Input() chapters;
  @Output() chapterActionEvent = new EventEmitter();
  formImg = this.fb.group({
    srcImg: [''],
  });
  @Output() createNewChapterEvent = new EventEmitter();
  faIcon = faPlus;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  chapterAction(type: string, chapter) {
    this.chapterActionEvent.emit({
      type,
      chapterid: chapter.chapterid,
      chapterNumber: chapter.chapterNumber,
    });
  }
}
