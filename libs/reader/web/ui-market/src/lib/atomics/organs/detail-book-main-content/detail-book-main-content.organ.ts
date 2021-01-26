import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-detail-book-main-content',
  templateUrl: './detail-book-main-content.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookMainContentOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
