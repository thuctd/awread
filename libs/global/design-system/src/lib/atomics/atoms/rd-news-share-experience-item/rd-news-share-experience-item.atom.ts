import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-news-share-experience-item',
  templateUrl: './rd-news-share-experience-item.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .bg {
        background-color: #eed2a9;
      }
      :host .color-green-dark {
        color: #5c9d7d;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsShareExperienceItemAtom implements OnInit {
  @Input() blogId;
  @Input() title = 'Chia sẻ kinh nghiệm';
  constructor() {}

  ngOnInit(): void {}
}
