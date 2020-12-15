import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'navbar-icon',
  templateUrl: './navbar-icon.atom.html',
  styleUrls: ['./navbar-icon.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarIconAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
