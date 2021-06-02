import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-news-events',
  templateUrl: './rd-news-events.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsEventsOrgan implements OnInit {
  @Input() banners = [
    {
      blogId: '',
      title: '',
      image: '',
      position: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
