import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-breadcrumb',
  templateUrl: './breadcrumb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbMolec implements OnInit {
  @Input() menu = [
    {
      title: 'Home',
      link: '/home',
      size: 'text-md',
      icon: faHome,
    },
    {
      title: 'Truyện ngắn',
      link: '/home',
      icon: faAngleRight,
      size: 'text-xs',
    },
    {
      title: 'Ngày ấy vì ai mà đổi thay',
      link: '',
      size: 'text-xs',
      icon: faAngleRight,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
