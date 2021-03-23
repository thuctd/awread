import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-introduction-shape-slogan',
  templateUrl: './rd-introduction-shape-slogan.molec.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionShapeSloganMolec implements OnInit {
  @Input() imageVertical = {
    srcImg: 'https://kinhbacweb.com/wp-content/uploads/2018/11/tong-hop-nhung-slogan-hay-ve-kinh-doanh-ban-nen-biet-8375.jpg',
    alt: '',
  };

  @Input() imageHorizontal = {
    srcImg: 'https://meocuchay.com/wp-content/uploads/2020/08/slogan-hay.jpg',
    alt: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
