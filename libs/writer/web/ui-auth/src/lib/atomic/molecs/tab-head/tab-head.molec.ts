import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

interface TabHead {
  name: string;
  isActive: boolean;
  default: boolean;
}

@Component({
  selector: 'tab-head',
  templateUrl: './tab-head.molec.html',
  styleUrls: ['./tab-head.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class TabHeadMolec implements OnInit {
  @Input() tabs = [{
    name: 'login',
    isActive: true,
  }, {
    name: 'register',
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
