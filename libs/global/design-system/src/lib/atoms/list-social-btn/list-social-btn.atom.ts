import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-social-btn',
  templateUrl: './list-social-btn.atom.html',
  styleUrls: ['./list-social-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSocialBtnAtom implements OnInit {
  @Output() socialBtn = new EventEmitter();
  @Input() faIcon = faChartLine;
  @Input() titleButton = 'Share';

  constructor() { }

  ngOnInit(): void {
  }

}
