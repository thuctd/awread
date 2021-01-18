import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-img-m',
  templateUrl: './img-m.atom.html',
  styleUrls: ['./img-m.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgMAtom implements OnInit {
  @Input() isSize: 's' | 'm' | 'l' | 'xl' | 'xxl' = 's';
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';
  @Input() altImg = 'Placeholder'

  constructor() { }

  ngOnInit(): void {
  }

}
