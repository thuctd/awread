import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-social-btn',
  templateUrl: './wrt-social-btn.atom.html',
  styleUrls: ['./wrt-social-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtSocialBtnAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
