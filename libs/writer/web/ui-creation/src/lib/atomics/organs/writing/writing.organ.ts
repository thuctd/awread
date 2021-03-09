import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'writing',
  templateUrl: './writing.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingOrgan implements OnInit {
  @Input() chapterForm: FormGroup = this.fb.group({
    bookImg: ['https://via.placeholder.com/520x740.png', [Validators.required]],
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
  @Input() shouldShowStatusUI: boolean;
  @Input() type: string;
  @Output() changeChapterStatusEvent = new EventEmitter();
  @Output() saveChapterEvent = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
