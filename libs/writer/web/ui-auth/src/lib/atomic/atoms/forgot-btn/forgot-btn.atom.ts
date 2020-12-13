import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'forgot-btn',
  templateUrl: './forgot-btn.atom.html',
  styleUrls: ['./forgot-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotBtnAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
