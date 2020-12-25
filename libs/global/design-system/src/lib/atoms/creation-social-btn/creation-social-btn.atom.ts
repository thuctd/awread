import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cr-social-btn',
  templateUrl: './creation-social-btn.atom.html',
  styleUrls: ['./creation-social-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreationSocialBtnAtom implements OnInit {
  @Input() faIcon = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
