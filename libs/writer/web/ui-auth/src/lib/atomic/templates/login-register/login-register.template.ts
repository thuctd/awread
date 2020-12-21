import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-register',
  templateUrl: './login-register.template.html',
  styleUrls: ['./login-register.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginRegisterTemplate implements OnInit {
  tabs = [
    { name: 'login', isActive: true },
    {name: 'register'}
  ]
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
