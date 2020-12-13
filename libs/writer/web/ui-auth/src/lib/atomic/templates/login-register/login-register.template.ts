import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
