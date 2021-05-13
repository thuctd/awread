import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-head-read-book',
  templateUrl: './head-read-book.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadReadBookMolec implements OnInit {
  @Input() defaultSelect = '';
  @Input() chapters = [];
  @Input() faIcon = faChevronLeft;
  @Output() selectionChange = new EventEmitter();
  @Output() nextChapterBook = new EventEmitter();
  @Output() backChapterBook = new EventEmitter();
  @Input() title = 'Ngày ấy vì ai mà đổi thay';
  constructor() { }

  ngOnInit(): void { }
}
