import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-nav-link',
  templateUrl: './nav-link.atom.html',
  styleUrls: ['./nav-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkAtom implements OnInit {
  @Input() title = 'Trang chủ';
  @Input() href = '/home';
  constructor() { }

  ngOnInit(): void {
  }

}
