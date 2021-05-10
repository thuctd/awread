import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-home-tab-book',
  templateUrl: './rd-home-tab-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHomeTabBookAtom implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Output() onBtnClicked = new EventEmitter();
  @Input() book = {
    bookId: "1",
    title: 'Cô gái theo đuổi năm nào',
    cover: 'https://via.placeholder.com/260x370.png',
    categoryId: "1",
  };
  @Input() active = false;

  constructor() { }

  ngOnInit(): void { }
}
