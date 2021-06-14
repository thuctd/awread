import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-news-awread',
  templateUrl: './rd-news-awread.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsAwreadOrgan implements OnInit {
  @Input() title = 'Tin mới';
  @Input() newsMiddle = [
    {
      newsId: '',
      title: '',
      status: '',
      description: '',
      updatedAt: '',
      image: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
