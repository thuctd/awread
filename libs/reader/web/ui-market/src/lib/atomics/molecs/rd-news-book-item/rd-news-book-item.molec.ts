import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-news-book-item',
  templateUrl: './rd-news-book-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsBookItemMolec implements OnInit {
  @Input() blogId;
  @Input() date = 'May 05 2021';
  @Input() title = 'Đây là tiêu đề';
  @Input() srcImg = '/global-assets/images/avatar-mrmrs.webp';
  @Input() status = 'HOT';

  constructor() {}

  ngOnInit(): void {}
}
