import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-bg',
  templateUrl: './wrt-bg.atom.html',
  styleUrls: ['./wrt-bg.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtBgAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
