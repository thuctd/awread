import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faAngleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'organ-navbar-menu',
  templateUrl: './navbar-menu.organ.html',
  styleUrls: ['./navbar-menu.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMenuOrgan implements OnInit {
  icon = faAngleDown;
  menu = [
    {
      title: 'Trang chủ',
      href: '/home',
    },
    {
      title: 'Truyện',
      href: '/market',
      dropdown: [
        {
          title: 'Truyện tự sáng tác',
          menu: [
            {
              page: 'composed',
              type: 'lb',
              title: 'Truyện dài',
            },
            {
              page: 'composed',
              type: 'lb',
              title: 'Truyện ngắn',
            },
            {
              page: 'composed',
              type: 'lb',
              title: 'Tản văn',
            },
          ],
        },
        {
          title: 'Truyện sưu tầm',
          menu: [
            {
              page: 'collected',
              type: 'lb',
              title: 'Truyện dài',
            },
            {
              page: 'collected',
              type: 'lb',
              title: 'Truyện ngắn',
            },
            {
              page: 'collected',
              type: 'lb',
              title: 'Tản văn',
            },
          ],
        },
      ],
    },
    {
      title: 'Đăng truyện',
      href: '/home',
    },
    {
      title: 'Cộng đồng',
      href: '/market',
      dropdown: [
        {
          page: '/',
          type: '',
          title: 'Về chúng tôi',
        },
        {
          page: '/',
          type: '',
          title: 'Tham gia với chúng tôi',
        },
        {
          page: '/',
          type: '',
          tag: 'New',
        },
      ],
    },
  ];
  @Input() color = 'text-white';
  constructor() {}

  ngOnInit(): void {}
}
