import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-news-awread-list',
  templateUrl: './rd-news-awread-list.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsAwreadListMolec implements OnInit {
  @Input() items = [
    {
      title: 'Hình như SHIB đang giảm',
      src: '/global-assets/images/Rectangle-487.webp',
      excerpt: 'Từ ngày em đến ....',
    },
    {
      title: 'Hình như BAKE đang giảm',
      src: '/global-assets/images/Rectangle-487.webp',
      excerpt: 'Từ ngày em đến ....',
    },
    {
      title: 'Hình như ALICE đang giảm',
      src: '/global-assets/images/Rectangle-487.webp',
      excerpt: 'Từ ngày em đến ....',
    },
    {
      title: 'Hình như SHIB đang giảm',
      src: '/global-assets/images/Rectangle-487.webp',
      excerpt: 'Từ ngày em đến ....',
    },
    {
      title: 'Hình như SHIB đang giảm',
      src: '/global-assets/images/Rectangle-487.webp',
      excerpt: 'Từ ngày em đến ....',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
