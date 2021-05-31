import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faPlus, faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'organ-wrt-book-toc-tab',
  templateUrl: './wrt-book-toc-tab.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookTocTabOrgan implements OnInit {
  @Input() tabsHead = [];

  @Input() chapterCouter = {
    chapterCountView: 0,
    chapterCountComments: 0,
  };

  @Input() chapters = [];
  @Output() chapterActionEvent = new EventEmitter();
  @Input() formImg = this.fb.group({
    srcImg: [''],
  });
  faIcon = {
    faPlus,
    faBackward
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  chapterAction(type: string, chapter) {
    this.chapterActionEvent.emit({
      type,
      chapter
    });
  }
}
