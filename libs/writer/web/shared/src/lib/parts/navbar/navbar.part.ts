import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-navbar',
  templateUrl: './navbar.part.html',
  styleUrls: ['./navbar.part.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarPart implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
