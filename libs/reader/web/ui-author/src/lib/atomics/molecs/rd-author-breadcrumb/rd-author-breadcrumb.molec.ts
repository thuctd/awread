import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-rd-author-breadcrumb',
  templateUrl: './rd-author-breadcrumb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorBreadcrumbMolec implements OnInit {
  menu = [
    {
      title: 'Home',
      link: '/home',
      size: 'text-md',
      icon: faHome,
    },
    {
      title: 'Tác giả',
      link: '',
      icon: faAngleRight,
      size: 'text-xs',
    },
    {
      title: 'Cẩm Thương',
      link: '',
      size: 'text-xs',
      icon: faAngleRight,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
