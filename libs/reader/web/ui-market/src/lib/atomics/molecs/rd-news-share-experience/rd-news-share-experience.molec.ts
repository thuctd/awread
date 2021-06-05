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
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsShareExperienceMolec implements OnInit {
  @Input() newsRight = [
    {
      blogId: '',
      title: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
