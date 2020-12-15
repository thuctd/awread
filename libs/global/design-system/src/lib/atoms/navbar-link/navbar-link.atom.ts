import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'navbar-link',
  templateUrl: './navbar-link.atom.html',
  styleUrls: ['./navbar-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLinkAtom implements OnInit {
  @Input() href = 'https://google.com';
  @Input() name = 'go to google';
  @Input() active = false;
  constructor() { }

  ngOnInit(): void {
  }

}
