import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-rd-home-book-update-dropdown-mb',
  templateUrl: './rd-home-book-update-dropdown-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .bg-gray {
        background-color: #e5e5e5;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHomeBookUpdateDropdownMbMolec implements OnInit {
  @Input() title = 'Tất cả';
  faIcon = faAngleDown;
  @Input() categories = [
    {
      categoryId: '',
      name: 'Tất cả',
    },
    {
      categoryId: '1',
      name: 'Truyện ngắn',
    },
    {
      categoryId: '2',
      name: 'Truyện dài',
    },
    {
      categoryId: '3',
      name: 'Tản văn',
    },
  ];

  @Input() isDropdown = false;
  @Output() emitBooks = new EventEmitter();
  @Output() emitAllBooks = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  displayDropdwon(Event) {
    this.isDropdown = !this.isDropdown;
  }

  onClick() {
    this.isDropdown = false;
  }

  changeTitle(event) {
    this.title = event.target.innerText;
  }
}
