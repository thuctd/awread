import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  @Input() items = [
    {
      id: 1,
      name: 'Tất cả',
    },
    {
      id: 2,
      name: 'Truyện dài',
    },
    {
      id: 3,
      name: 'Truyện ngắn',
    },
    {
      id: 4,
      name: 'Tản văn',
    },
  ];

  @Input() isDropdown = false;

  constructor() {}

  ngOnInit(): void {}

  displayDropdwon(Event) {
    this.isDropdown = !this.isDropdown;
  }

  onClick() {
    this.isDropdown = false;
  }

  getValueDropdown(event: any) {
    this.title = event.target.outerText;
  }
}
