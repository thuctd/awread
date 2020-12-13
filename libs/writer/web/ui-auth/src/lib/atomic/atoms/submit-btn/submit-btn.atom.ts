import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'submit-btn',
  templateUrl: './submit-btn.atom.html',
  styleUrls: ['./submit-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitBtnAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
