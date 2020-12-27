import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smailimg-profile',
  templateUrl: './smailimg-profile.atom.html',
  styleUrls: ['./smailimg-profile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmailimgProfileAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
