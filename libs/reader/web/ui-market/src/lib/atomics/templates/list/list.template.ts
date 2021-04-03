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
  @Input() books = [];
  @Input() categoryBooks = [];
  @Input() actions = [{
    faIcon: faThLarge,
    display: 'grid',
    active: false,
  }, {
    faIcon: faList,
    display: 'list',
    active: true,
  }]
  @Input() isLoadedPage: true | false = true;
  @Input() tabsHead = [
    { name: 'Truyện dài', type: 'longbook', isActive: true },
  ];

  @Input() selectedTab = 'longbook';
  @Output() switchTabEvent = new EventEmitter();
  @Output() eventSearch = new EventEmitter();
  @Output() changeCategoryBooks = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  changeDisplay(mode: string) {
    this.display = mode;
  }
}
