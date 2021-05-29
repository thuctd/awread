import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'organ-wrt-chapter-writing',
  templateUrl: './wrt-chapter-writing.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtChapterWritingOrgan implements OnInit {
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
  @Input() book;
  @Output() chapterActionEvent = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
