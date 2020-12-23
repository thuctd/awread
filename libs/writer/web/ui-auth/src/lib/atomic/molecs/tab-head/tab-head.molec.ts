import { Tab } from './../../../pages/login-register-desktop/interface/tabs';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

interface TabHead {
  name: string;
  isActive: boolean;
  default: boolean;
}

@Component({
  selector: 'tab-head',
  templateUrl: './tab-head.molec.html',
  styleUrls: ['./tab-head.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabHeadMolec implements OnInit {
  @Input() tabs: Tab[];
  @Input() selectedTab: string;
  @Output() toggleTab = new EventEmitter();
  // currentTab = { name: null, isActive: false };
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.currentTab = this.tabs.find(tab => tab.isActive);
  }

  toggleTabs(currentTab: TabHead) {
    // this.currentTab = currentTab;
    // this.tabs.forEach((tab) => {
    //   tab.isActive = false;
    //   if (tab.name === currentTab.name) {
    //     tab.isActive = true;
    //   }
    // });
    this.toggleTab.emit();
  }
}
