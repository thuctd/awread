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
  navHome = {
    title: 'Trang chủ',
    href: '/',
  };
  naveBook = {
    title: 'Truyện',
    dropdown: [
      {
        title: 'Truyện tự sáng tác',
        menu: [
          {
            page: '/composed',
            type: 'longbook',
            title: 'Truyện dài',
          },
          {
            page: '/composed',
            type: 'shortbook',
            title: 'Truyện ngắn',
          },
          {
            page: '/composed',
            type: 'prose',
            title: 'Tản văn',
          },
        ],
      },
      {
        title: 'Truyện sưu tầm',
        menu: [
          {
            page: '/collected',
            type: 'longbook',
            title: 'Truyện dài',
          },
          {
            page: '/collected',
            type: 'shortbook',
            title: 'Truyện ngắn',
          },
          {
            page: '/collected',
            type: 'prose',
            title: 'Tản văn',
          },
        ],
      },
    ],
  };

  navCreateBook = {
    title: 'Đăng truyện',
    href: '/home',
  };

  navPublic = {
    title: 'Cộng đồng',
    dropdown: [
      {
        page: '/introduction',
        title: 'Về chúng tôi',
      },
      {
        page: '/community',
        title: 'Tham gia với chúng tôi',
      },
      {
        page: '/news',
        title: 'Tin tức',
      },
    ],
  };
  @Input() color = 'text-white';
  constructor() {}

  ngOnInit(): void {}
}
