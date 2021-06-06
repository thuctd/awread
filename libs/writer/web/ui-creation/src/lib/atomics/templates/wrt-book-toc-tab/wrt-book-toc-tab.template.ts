import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-wrt-book-toc-tab',
  templateUrl: './wrt-book-toc-tab.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookTocTabTemplate implements OnInit {
  @Input() chapters;
  @Input() book;

  @Input() chapterCouter = {
    chapterCountView: 0,
    chapterCountComments: 0,
  };

  @Input() tabsHead = [];

  @Output() chapterActionEvent = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

}
