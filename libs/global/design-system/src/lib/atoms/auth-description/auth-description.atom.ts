import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-description',
  templateUrl: './auth-description.atom.html',
  styleUrls: ['./auth-description.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthDescriptionAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
