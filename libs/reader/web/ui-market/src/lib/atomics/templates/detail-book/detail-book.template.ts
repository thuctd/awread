import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-detail-book',
  templateUrl: './detail-book.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookTemplate implements OnInit {
  @Input() items = [];
  @Input() newestChapters = [];
  @Input() chapters;
  @Input() book = {};
  @Input() topBooks = [];
  @Input() authorBooks = [];
  @Output() chapterFistEvent = new EventEmitter();
  @Output() chapterLastEvent = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();
  @Output() nativeAuthorBook = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
