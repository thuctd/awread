import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cr-social-btn',
  templateUrl: './social-btn.atom.html',
  styleUrls: ['./social-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialBtnAtom implements OnInit {
  @Output() socialBtn = new EventEmitter();
  @Input() provider = 'facebook';

  constructor() { }

  ngOnInit(): void {
  }

}
