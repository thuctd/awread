import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-social-menu',
  templateUrl: './wrt-social-menu.atom.html',
  styleUrls: ['./wrt-social-menu.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtSocialMenuAtom implements OnInit {
  @Input() title = 'Em là nhà';

  constructor() { }

  ngOnInit(): void {
  }

}
