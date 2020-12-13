import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'social-btn',
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
