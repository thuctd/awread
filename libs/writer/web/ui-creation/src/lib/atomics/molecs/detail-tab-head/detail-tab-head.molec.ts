import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

interface TabHead {
  name: string;
  isActive: boolean;
  default: boolean;
}

@Component({
  selector: 'detail-tab-head',
  templateUrl: './detail-tab-head.molec.html',
  styleUrls: ['./detail-tab-head.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailTabHeadMolec implements OnInit {

  @Input() tabs = [{
    name: 'Tables of Contents',
    isActive: true,
  }, {
    name: 'Story Details',
    isActive: false,
  }];

  currentTab = { name: null, isActive: false };
  constructor() { }

  ngOnInit(): void {
    this.currentTab = this.tabs.find(tab => tab.isActive);
  }

  toggleTabs(currentTab: TabHead) {
    this.currentTab = currentTab;
    this.tabs.forEach(tab => {
      tab.isActive = false;
      if (tab.name === currentTab.name) {
        tab.isActive = true;
      }
    })
  }

}
