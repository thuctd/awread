import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-tab-categories',
  templateUrl: './tab-categories.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabCategoriesMolec implements OnInit {
  @Input() isLoadedPage: true | false = true;
  @Input() tab = { name: 'Truyện dài', tabName: 'longbook', isActive: true };

  @Input() selectedTab = 'longbook';
  @Output() switchTabEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
