import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-info-long-book',
  templateUrl: './list-info-long-book.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoLongBookMolec implements OnInit {
  @Input() book = 'Cô gái chúng ta cùng theo đuổi năm nào';
  @Input() bookId = '';
  @Input() btns = ['Chương 1', 'Chương 2'];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
