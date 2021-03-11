import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'template-writing',
  templateUrl: './writing.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingTemplate implements OnInit {
  @Input() chapterForm: FormGroup = this.fb.group({
    bookImg: ['/global-assets/images/image.webp', [Validators.required]],
    dirty: ['', Validators.required],
    valueChanges: ['', Validators.required],
    bookTitle: ['', Validators.required],
    chapterNumber: ['', Validators.required],
    status: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
  });
  @Input() chapterStatus: string;
  @Input() submitted: boolean;
  @Input() shouldShowStatusUI = true;
  @Input() type: string;
  @Output() changeChapterStatusEvent = new EventEmitter();
  @Output() saveChapterEvent = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
