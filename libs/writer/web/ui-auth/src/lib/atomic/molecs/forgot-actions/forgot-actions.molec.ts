import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'forgot-actions',
  templateUrl: './forgot-actions.molec.html',
  styleUrls: ['./forgot-actions.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotActionsMolec implements OnInit {
  constructor() { }
  @Input() title;
  @Input() active = false;
  @Output() submitEvent =new EventEmitter();
  ngOnInit(): void {
  }

}
