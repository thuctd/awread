import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.group.html',
  styleUrls: ['./login-form.group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormGroup implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
