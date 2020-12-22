import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-password',
  templateUrl: './new-password.template.html',
  styleUrls: ['./new-password.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPasswordTemplate implements OnInit {
@Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
