import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faHome , faAngleLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-breadcrumb',
  templateUrl: './breadcrumb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbMolec implements OnInit {
  menu = [
    {
      title: 'Home',
      link: '/home',
      size: 'text-md',
      icon: faHome
    },
    {
      title: 'Truyện ngắn',
      link: '/home',
      icon: faAngleLeft,
      size: 'text-xs',
    },
    {
      title: 'Ngày ấy vì ai mà đổi thay',
      link: '',
      size: 'text-xs',
      icon: faAngleLeft
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
