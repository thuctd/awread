import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-auth-background',
  templateUrl: './auth-background.template.html',
  styleUrls: ['./auth-background.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthBackgroundTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
