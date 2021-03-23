import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-white-box-first',
  templateUrl: './rd-introduction-white-box-first.organ.html',
  styleUrls: ['./rd-introduction-white-box-first.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionWhiteBoxFirstOrgan implements OnInit {
  @Input() imageVertical = {
    srcImg: '/global-assets/images/smailImg.webp',
    alt: '',
  };

  @Input() imageHorizontal = {
    srcImg: 'https://via.placeholder.com/260x370.png',
    alt: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
