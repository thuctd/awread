import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'remember-forgot',
  templateUrl: './remember-forgot.group.html',
  styleUrls: ['./remember-forgot.group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RememberForgotGroup implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
