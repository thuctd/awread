import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-menu-btn',
  templateUrl: './wrt-menu-btn.atom.html',
  styleUrls: ['./wrt-menu-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtMenuBtnAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
