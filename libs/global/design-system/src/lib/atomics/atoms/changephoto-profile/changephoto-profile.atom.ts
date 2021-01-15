import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'changephoto-profile',
  templateUrl: './changephoto-profile.atom.html',
  styleUrls: ['./changephoto-profile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangephotoProfileAtom implements OnInit {
  @Output() eventChangeImg = new EventEmitter();''
  constructor() { }

  ngOnInit(): void {
  }

}
