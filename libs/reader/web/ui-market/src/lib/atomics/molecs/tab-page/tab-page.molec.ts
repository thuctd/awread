import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

interface TabHead {
  name: string;
  isActive: boolean;
  default: boolean;
}

@Component({
  selector: 'tab-page',
  templateUrl: './tab-page.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabPageMolec implements OnInit {
  @Input() tabs = [
    {
      name: 'Truyện dài',
      isActive: true,
    },
    {
      name: 'Truyện ngắn',
      isActive: false,
    },
    {
      name: 'Tiểu thuyết',
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
