import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-img-m',
  templateUrl: './img-m.atom.html',
  styleUrls: ['./img-m.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgMAtom implements OnInit {
  @Input() isSize = 0;
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';

  constructor() { }

  ngOnInit(): void {
  }

}
