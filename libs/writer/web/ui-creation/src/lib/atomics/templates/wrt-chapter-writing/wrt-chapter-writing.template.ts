import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'template-wrt-chapter-writing',
  templateUrl: './wrt-chapter-writing.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtChapterWritingTemplate implements OnInit {
  @Input() chapterForm: FormGroup = this.fb.group({
    bookImg: ['/global-assets/images/image.webp', [Validators.required]],
    title: ['', Validators.required],
    content: ['', Validators.required],
  });
  @Input() book;
  @Output() chapterActionEvent = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
