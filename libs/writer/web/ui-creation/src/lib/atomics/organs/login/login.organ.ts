import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.organ.html',
  styleUrls: ['./login.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
