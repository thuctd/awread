import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'navbar-link',
  templateUrl: './navbar-link.molec.html',
  styleUrls: ['./navbar-link.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLinkMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
