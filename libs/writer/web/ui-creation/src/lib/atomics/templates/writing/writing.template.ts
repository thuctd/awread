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
  selector: 'template-writing',
  templateUrl: './writing.template.html',
  styleUrls: ['./writing.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingTemplate implements OnInit {
  @Input() chapterForm: FormGroup;
  @Input() chapterStatus: string;
  @Output() chapterStatusEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
