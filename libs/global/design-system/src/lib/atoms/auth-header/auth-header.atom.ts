import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'auth-header',
  templateUrl: './auth-header.atom.html',
  styleUrls: ['./auth-header.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthHeaderAtom implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
