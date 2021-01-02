import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-img-s',
  templateUrl: './img-s.atom.html',
  styleUrls: ['./img-s.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgSAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
