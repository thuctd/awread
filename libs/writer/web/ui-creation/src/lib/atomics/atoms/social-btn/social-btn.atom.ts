import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cr-social-btn',
  templateUrl: './social-btn.atom.html',
  styleUrls: ['./social-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialBtnAtom implements OnInit {
  @Output() socialBtn = new EventEmitter();
  @Input() provider = 'facebook';
  @Input() faIcon = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
