import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-submit-btn',
  templateUrl: './wrt-submit-btn.atom.html',
  styleUrls: ['./wrt-submit-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtSubmitBtnAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
