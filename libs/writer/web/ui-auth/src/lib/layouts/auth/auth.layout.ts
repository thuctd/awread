import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-auth',
  templateUrl: './auth.layout.html',
  styleUrls: ['./auth.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayout implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
