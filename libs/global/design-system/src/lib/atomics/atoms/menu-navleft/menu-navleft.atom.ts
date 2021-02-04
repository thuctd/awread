import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'menu-navleft',
  templateUrl: './menu-navleft.atom.html',
  styleUrls: ['./menu-navleft.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavleftAtom implements OnInit {
  iconUrl = '/global-assets/images/Group-4.webp';

  constructor() {}

  ngOnInit(): void {}
}
