import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

interface TabHead {
  name: string;
  isActive: boolean;
  default: boolean;
}

@Component({
  selector: 'tab-category',
  templateUrl: './tab-category.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabCategoryMolec implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Output() onBtnClicked = new EventEmitter();
  @Input() titleBook = 'Cô gái chúng ta cùng theo đuổi';
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';
  @Input() active = false;

  @Input() tabs = [
    {
      name: 'Tình yêu',
      isActive: true,
    },
    {
      name: 'Học trò',
      isActive: false,
    },
    {
      name: 'Kinh dị',
      isActive: false,
    },
    {
      name: 'Tiểu thuyết',
      isActive: false,
    },
  ];

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
