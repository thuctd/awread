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
  @Input() title = 'tin mới Awread';
  @Input() newsMiddle = [
    {
      blogId: '',
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
