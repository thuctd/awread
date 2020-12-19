import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'auth-title',
  templateUrl: './auth-title.atom.html',
  styleUrls: ['./auth-title.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthTitleAtom implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
