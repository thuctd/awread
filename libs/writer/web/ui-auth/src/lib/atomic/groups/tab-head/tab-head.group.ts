import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

interface TabHead {
  name: string;
  isActive: boolean;
  default: boolean;
}

@Component({
  selector: 'tab-head',
  templateUrl: './tab-head.group.html',
  styleUrls: ['./tab-head.group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
  

  
export class TabHeadGroup implements OnInit {
  @Input() tabs = [{
    name: 'login',
    isActive: true,
  }, {
    name: 'sign up',
    isActive: false,
    }];
  

  constructor() { }

  ngOnInit(): void {
  }

  toggleTabs(currentTab: TabHead) {
    this.tabs.forEach(tab => {
      tab.isActive = false;
      if (tab.name === currentTab.name) {
        tab.isActive = true;
      } 
    })
  }

}
