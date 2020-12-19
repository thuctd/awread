import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-header',
  templateUrl: './auth-header.atom.html',
  styleUrls: ['./auth-header.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthHeaderAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
