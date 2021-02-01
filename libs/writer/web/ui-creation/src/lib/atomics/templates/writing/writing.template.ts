import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'template-writing',
  templateUrl: './writing.template.html',
  styleUrls: ['./writing.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingTemplate implements OnInit {
  @Input() chapterForm: FormGroup;
  @Input() chapterStatus: string;
  @Input() submitted: boolean;
  @Input() shouldShowStatusUI: boolean;
  @Input() type: string;
  @Output() changeChapterStatusEvent = new EventEmitter();
  @Output() saveChapterEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
