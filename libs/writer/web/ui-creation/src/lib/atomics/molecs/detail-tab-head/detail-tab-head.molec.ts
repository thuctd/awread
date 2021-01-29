import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-tab-head',
  templateUrl: './detail-tab-head.molec.html',
  styleUrls: ['./detail-tab-head.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailTabHeadMolec implements OnInit {
  @Input() tabs;

  currentTab = {
    name: 'Thông tin của truyện',
    tab: 'toc',
    type: 'create',
    isActive: true,
  };
  constructor() { }

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
