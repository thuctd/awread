import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'atom-breadcrumb',
  templateUrl: './breadcrumb.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbAtom implements OnInit {
  @Input() icon = faHome;
  @Input() items = [{
    title: 'Home',
    link: '/home'
  }];

  constructor() {}

  ngOnInit(): void {}
}
