import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-list',
  templateUrl: './list.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTemplate implements OnInit {
  display = 'grid';
  @Input() actions = [
    {
      faIcon: faThLarge,
      display: 'grid',
      class: 'rounded-l-md',
    },
    {
      faIcon: faList,
      display: 'list',
      class: 'rounded-r-md',
    },
  ];
  @Input() isLoadedPage: true | false = true;
  @Input() tabsHead = [
    { name: 'Truyện dài', tabName: 'longbook', isActive: true },
    { name: 'Truyện ngắn', tabName: 'shortbook', isActive: false },
    { name: 'Tản văn', tabName: 'novel', isActive: false },
  ];

  @Input() selectedTab = 'longbook';
  @Output() switchTabEvent = new EventEmitter();
  @Output() eventSearch = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  changeDisplay(mode: string) {
    this.display = mode;
  }
}
