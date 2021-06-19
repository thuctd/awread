import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'organ-content-book',
  templateUrl: './content-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentBookOrgan implements OnInit {
  @Input() chapters = [];
  @Input() faIcon = faChevronLeft;
  @Output() nextChapterBook = new EventEmitter();
  @Output() backChapterBook = new EventEmitter();
  @Output() child = new EventEmitter();
  @Input() chapter = {
    position: '',
    chapterId: '',
    title: 'Cuộc đời của mỗi người...',
    content: `
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  `,
  };

  constructor() { }

  ngOnInit(): void {
    // const element = document.getElementById('content');
  }
}
