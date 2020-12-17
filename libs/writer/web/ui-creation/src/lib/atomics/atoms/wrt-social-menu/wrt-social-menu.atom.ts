import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-social-menu',
  templateUrl: './wrt-social-menu.atom.html',
  styleUrls: ['./wrt-social-menu.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtSocialMenuAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
