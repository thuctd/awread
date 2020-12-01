import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'awread-login-form',
  templateUrl: './login-form.section.html',
  styleUrls: ['./login-form.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormSection implements OnInit {
  @Input() name: string;
  @Output() clickAction = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
