import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'atom-breadcrumb-link',
  templateUrl: './breadcrumb-link.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbLinkAtom implements OnInit {
  @Input() icon = faHome;
  @Input() link = '/home';
  @Input() title = 'Home';
  @Input() size = 'text-md';
  constructor() {}
  ngOnInit(): void {}
}
