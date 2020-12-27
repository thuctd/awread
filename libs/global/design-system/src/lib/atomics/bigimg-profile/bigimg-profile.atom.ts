import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bigimg-profile',
  templateUrl: './bigimg-profile.atom.html',
  styleUrls: ['./bigimg-profile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigimgProfileAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
