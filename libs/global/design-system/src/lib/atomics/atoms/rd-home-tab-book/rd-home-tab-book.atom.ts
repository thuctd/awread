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
    id: "1",
    title: 'Cô gái theo đuổi năm nào',
    imgUrl: 'https://via.placeholder.com/260x370.png',
    categoryId: "1",
    genres: [1, 3],
  };
  @Input() active = false;

  constructor() { }

  ngOnInit(): void { }
}
