import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-new-password',
  templateUrl: './new-password.template.html',
  styleUrls: ['./new-password.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPasswordTemplate implements OnInit {
  @Output() updateNewPassword = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
