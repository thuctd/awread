import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-news-mb',
  templateUrl: './rd-news-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsMbTemplate implements OnInit {
  @Input() tabs = [
    {
      name: 'Điểm tin sách',
      isActive: true,
    },
    {
      name: 'Tin mới',
      isActive: false,
    },
  ];
  @Input() classActive = 'col-span-6 border rounded-xl border-green-primary text-green-primary pt-2';
  @Input() classNormal = 'col-span-6 border rounded-xl border-gray-text text-green-primary pt-2';

  @Input() news = [];

  constructor() {}

  ngOnInit(): void {}
}
