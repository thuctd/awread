import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tab-btn',
  templateUrl: './tab-btn.atom.html',
  styleUrls: ['./tab-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBtnAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
