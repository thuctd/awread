import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'changephoto-profile',
  templateUrl: './changephoto-profile.atom.html',
  styleUrls: ['./changephoto-profile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangephotoProfileAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
