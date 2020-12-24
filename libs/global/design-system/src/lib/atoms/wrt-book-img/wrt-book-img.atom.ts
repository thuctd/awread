import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-book-img',
  templateUrl: './wrt-book-img.atom.html',
  styleUrls: ['./wrt-book-img.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtBookImgAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
