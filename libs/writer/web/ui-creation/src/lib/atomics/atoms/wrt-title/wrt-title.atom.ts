import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-title',
  templateUrl: './wrt-title.atom.html',
  styleUrls: ['./wrt-title.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtTitleAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
