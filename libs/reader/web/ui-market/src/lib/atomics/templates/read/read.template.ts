import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-read',
  templateUrl: './read.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadTemplate implements OnInit {
  @Input() loading;
  @Input() chapters = [];
  @Input() breadcrumbs = [];
  @Output() nextChapterBook = new EventEmitter();
  @Output() backChapterBook = new EventEmitter();
  @Input() books = [];
  @Input() chapter = {
    title: '',
    content: `
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  `,
  };
  constructor() { }

  ngOnInit(): void { }
}
