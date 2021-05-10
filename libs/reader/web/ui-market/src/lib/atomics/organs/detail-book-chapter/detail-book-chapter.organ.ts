import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'organ-detail-book-chapter',
  templateUrl: './detail-book-chapter.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookChapterOrgan implements OnInit {
  icon = faAngleDown;
  @Output() submitEvent = new EventEmitter()
  @Input() chapters = [];

  constructor() {
  }

  ngOnInit(): void {
    console.log('chapters: ', this.chapters);
  }

}
