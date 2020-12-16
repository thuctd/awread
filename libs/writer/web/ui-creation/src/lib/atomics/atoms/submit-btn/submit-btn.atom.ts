import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'cr-submit-btn',
  templateUrl: './submit-btn.atom.html',
  styleUrls: ['./submit-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitBtnAtom implements OnInit {
  @Output() onBtnClicked = new EventEmitter();
  @Input() submitText = 'Publish';
  @Input() active = true;

  constructor() { }

  ngOnInit(): void {
  }

}
