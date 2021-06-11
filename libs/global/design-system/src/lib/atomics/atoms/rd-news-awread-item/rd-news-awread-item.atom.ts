import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-news-awread-item',
  templateUrl: './rd-news-awread-item.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsAwreadItemAtom implements OnInit {
  @Input() newsId;
  @Input() title = 'Thông báo lịch phát hành truyện mới';
  @Input() srcImg = '/global-assets/images/Rectangle-487.webp';
  @Input() date = '';
  @Input() description = '';
  @Input() mode: 'grid' | 'list' = 'grid';

  @Input() class = '';

  constructor() {}

  ngOnInit(): void {}
}
