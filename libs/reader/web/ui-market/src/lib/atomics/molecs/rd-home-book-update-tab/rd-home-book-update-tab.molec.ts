import { first } from 'rxjs/operators';
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
  @Input() tabs = [
    {
      name: 'Tất cả',
      isActive: true,
    },
    {
      name: 'Truyện dài',
      isActive: false,
    },
    {
      name: 'Truyện ngắn',
      isActive: false,
    },
    {
      name: 'Tản văn',
      isActive: false,
    },
  ];

  @Input() selectedTab: string;
  @Output() toggleTab = new EventEmitter();

  currentTab = { name: null, isActive: false };
  constructor() {}

  ngOnInit(): void {
    this.currentTab = this.tabs.find((tab) => tab.isActive);
  }

  toggleTabs(currentTab: TabHead) {
    this.currentTab = currentTab;
    this.tabs.forEach((tab) => {
      tab.isActive = false;
      if (tab.name === currentTab.name) {
        tab.isActive = true;
      }
    });
  }
}
