import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-auth-bg-mobile',
  templateUrl: './auth-bg-mobile.atom.html',
  styleUrls: ['./auth-bg-mobile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBgMobileAtom implements OnInit {
  @Input() faIcon = faArrowLeft;

  constructor() { }

  ngOnInit(): void { }
}
