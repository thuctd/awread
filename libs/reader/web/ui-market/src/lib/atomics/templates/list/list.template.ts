import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() titleTemplate: 'Truyện tự sáng tác' | 'Truyện sưu tập' = 'Truyện sưu tập';
  @Input() tabsHead = [
    { name: 'Truyện dài', tabName: 'longbook', isActive: true },
    { name: 'Truyện ngắn', tabName: 'shortbook', isActive: false },
    { name: 'Tiểu thuyết', tabName: 'novel', isActive: false },
  ];
  namePage: String;

  @Input() selectedTab = 'longbook';
  @Output() switchTabEvent = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.namePage = this.router.url;
  }
}
