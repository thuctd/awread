import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-detail-tab-head',
  templateUrl: './wrt-detail-tab-head.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailTabHeadMolec implements OnInit {
  @Input() tabs = [];

  currentTab = {
    name: 'Thông tin truyện',
    tab: 'toc',
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
      }
    });
  }
}
