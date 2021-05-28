import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

interface TabHead {
  name: string;
  isActive: boolean;
  default: boolean;
}
@Component({
  selector: 'molec-rd-author-tabs',
  templateUrl: './rd-author-tabs.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorTabsMolec implements OnInit {
  @Input() tabs = [
    {
      name: 'Tác phẩm',
      isActive: true,
      faIcon: null,
      href: null,
    },
    {
      name: 'Người theo dõi',
      isActive: false,
      faIcon: null,
      href: null,
    },
  ];
  @Input() faIcon;
  @Input() classActive = 'border-b-2 border-green-primary text-green-primary';
  @Input() classNormal = 'text-gray-text';

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
