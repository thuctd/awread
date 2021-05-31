import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'template-read-mobile',
  templateUrl: './read-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadMobileTemplate implements OnInit {
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
  @Output() nativeTopBook = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
