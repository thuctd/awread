import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { User } from '@awread/writer/web/feature-auth';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.organ.html',
  styleUrls: ['./top-nav.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavOrgan implements OnInit {
  @Input() user: User;
  @Output() searchEvent = new EventEmitter();
  @Output() signoutEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
