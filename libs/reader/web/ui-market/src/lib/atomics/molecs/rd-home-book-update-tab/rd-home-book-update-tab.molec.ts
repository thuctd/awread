import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
interface TabHead {
  name: string;
  isActive: boolean;
}
@Component({
  selector: 'molec-rd-home-book-update-tab',
  templateUrl: './rd-home-book-update-tab.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .active:first-child {
        border: none;
        background-color: transparent;
        color: black;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHomeBookUpdateTabMolec implements OnInit {
  currentCategory = null;
  currentIndex = 999;
  currentName = 'Tất cả';

  @Input() categories = [
    {
      categoryId: '',
      name: 'Tất cả'
    }
  ];

  @Input() selectedTab: string;
  @Output() emitBooks = new EventEmitter();
  @Output() emitAllBooks = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  setActiveCategory(category, index) {
    this.currentCategory = category;
    this.currentIndex = index;
    this.currentName = category.name;
  }

  setNoneActiveAll() {
    this.currentIndex = 999;
  }


}
