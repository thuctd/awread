import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faBookmark, faCoins } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-detail-book-bookmark-donate',
  templateUrl: './detail-book-bookmark-donate.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookBookmarkDonateMolec implements OnInit {
  icons = { faBookmark, faCoins };

  @Input() donate = false;

  @Input() bread = {
    srcBread: '/global-assets/images/Group-727.webp',
    altBread: 'altBread',
  };
  @Input() bread2 = {
    srcBread2: '/global-assets/images/Group-841_2x.webp',
    altBread2: 'altBread2',
  };
  constructor() {}

  ngOnInit(): void {}
}
