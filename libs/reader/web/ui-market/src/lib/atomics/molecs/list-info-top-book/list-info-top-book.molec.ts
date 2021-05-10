import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-info-top-book',
  templateUrl: './list-info-top-book.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoTopBookMolec implements OnInit {
  @Input() title = 'Cô gái chúng ta cùng theo đuổi năm nào';
  @Input() bookId = '';

  @Input() btns = [{
    position: '1',
    chapterId: 'a8c80b60-acd6-4522-82cb-095d0ba677a7'
  }];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
