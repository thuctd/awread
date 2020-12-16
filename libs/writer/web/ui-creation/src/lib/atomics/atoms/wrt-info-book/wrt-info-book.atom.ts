import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-info-book',
  templateUrl: './wrt-info-book.atom.html',
  styleUrls: ['./wrt-info-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtInfoBookAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
