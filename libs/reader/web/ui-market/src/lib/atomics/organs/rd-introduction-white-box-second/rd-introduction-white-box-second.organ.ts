import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-white-box-second',
  templateUrl: './rd-introduction-white-box-second.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      img {
        background: url(https://picsum.photos/800/600?image=1053) center/cover;
        clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
        height: 26rem;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionWhiteBoxSecondOrgan implements OnInit {
  facebook = 'https://www.facebook.com/Camthuong95/';
  contact = 'camthuong.awread@gmail.com';

  constructor() {}

  ngOnInit(): void {}
}
