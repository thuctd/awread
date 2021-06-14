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
      name: 'Góc chia sẻ kinh nghiệm',
      isActive: true,
    },
    {
      name: 'Tin mới',
      isActive: false,
    },
  ];
  @Input() classActive = 'col-span-6 border rounded-xl border-green-primary text-green-primary text-center pt-1.5';
  @Input() classNormal = 'col-span-6 border rounded-xl border-gray-text text-green-text text-center pt-1.5';

  @Input() news = [];

  constructor() { }

  ngOnInit(): void { }
}
