import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-circle-image',
  templateUrl: './circle-image.atom.html',
  styleUrls: ['./circle-image.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleImageAtom implements OnInit {
  @Input() src = 'http://tachyons.io/img/avatar-mrmrs.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
