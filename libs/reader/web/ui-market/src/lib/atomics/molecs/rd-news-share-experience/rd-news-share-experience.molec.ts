import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-news-share-experience',
  templateUrl: './rd-news-share-experience.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .bg-green-light {
        background-color: #b1dac6;
      }
      :host .text {
        font-size: 1.45rem;
      }
      :host .w-84 {
        width: 20.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsShareExperienceMolec implements OnInit {
  @Input() newsLeft = [
    {
      newsId: '',
      title: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
