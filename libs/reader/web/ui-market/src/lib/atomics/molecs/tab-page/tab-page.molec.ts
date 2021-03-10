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
      tab: 'lb',
      type: 'long',
      isActive: true,
    },
    {
      name: 'Truyện ngắn',
      tab: 'sb',
      type: 'short',
      isActive: false,
    },
    {
      name: 'Tiểu thuyết',
      tab: 'novel',
      type: 'novel',
      isActive: false,
    },
  ];

  @Input() selectedTab: string;
  @Output() toggleTab = new EventEmitter();

  currentTab = {
    name: 'Thông tin truyện',
    tab: 'lb',
    type: 'create',
    isActive: true,
  };
  constructor() {}

  ngOnInit(): void {
    this.currentTab = this.tabs.find((tab) => tab.isActive);
  }

  toggleTabs(currentTab) {
    this.currentTab = currentTab;
    this.tabs.forEach((tab) => {
      tab.isActive = false;
      if (tab.name === currentTab.name) {
        tab.isActive = true;
        console.log(tab);
      }
    });
  }
}
