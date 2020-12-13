import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-bg',
  templateUrl: './auth-bg.atom.html',
  styleUrls: ['./auth-bg.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthBgAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
