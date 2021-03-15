import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() isLoadedPage: true | false = true;
  @Input() tabsHead = [
    { name: 'Truyện dài', tabName: 'longbook', isActive: true },
    { name: 'Truyện ngắn', tabName: 'shortbook', isActive: false },
    { name: 'Tản văn', tabName: 'novel', isActive: false },
  ];
  namePage: String;

  @Input() selectedTab = 'longbook';
  @Output() switchTabEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
