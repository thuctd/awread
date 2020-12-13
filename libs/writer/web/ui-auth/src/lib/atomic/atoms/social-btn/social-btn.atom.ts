import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'social-btn',
  templateUrl: './social-btn.atom.html',
  styleUrls: ['./social-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialBtnAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
