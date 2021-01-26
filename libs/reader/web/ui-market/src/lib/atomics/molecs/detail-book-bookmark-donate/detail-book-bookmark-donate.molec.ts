import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faBookmark, faCoins } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-detail-book-bookmark-donate',
  templateUrl: './detail-book-bookmark-donate.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookBookmarkDonateMolec implements OnInit {
  icons={faBookmark,faCoins }
  constructor() { }

  ngOnInit(): void {
  }

}
