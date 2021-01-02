import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'index',
  templateUrl: './index.organ.html',
  styleUrls: ['./index.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexOrgan implements OnInit {
  @Input() chapters;
  @Output() chapterActionEvent = new EventEmitter();
  formImg = this.fb.group({
    srcImg: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  chapterAction(type: string, chapter) {
    this.chapterActionEvent.emit({ type, chapterid: chapter.chapterid });
  }
}
