import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-tools',
  templateUrl: './wrt-tools.atom.html',
  styleUrls: ['./wrt-tools.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtToolsAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
