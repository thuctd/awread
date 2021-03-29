import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-detail-book-top-mobile',
  templateUrl: './detail-book-top-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .border-12 {
        border-width: 12px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookTopMobileOrgan implements OnInit {
  @Input() src = '/global-assets/images/0004.webp';
  @Input() chapterId = '123453_Assxzxc';
  @Input() bookId = '123453_Assxzxc';

  constructor() {}

  ngOnInit(): void {}
}
