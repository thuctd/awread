import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-detail-book-content-mobile',
  templateUrl: './detail-book-content-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookContentMobileOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
