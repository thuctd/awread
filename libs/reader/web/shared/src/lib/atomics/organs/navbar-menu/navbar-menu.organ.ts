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
        title: {
          title: 'Truyện tự sáng tác',
          page: '/composed',
          categoryId: '',
        },
        menu: [
          {
            page: '/composed',
            categoryId: '1',
            title: 'Truyện ngắn',
          },
          {
            page: '/composed',
            categoryId: '2',
            title: 'Truyện dài',
          },
          {
            page: '/composed',
            categoryId: '3',
            title: 'Tản văn',
          },
        ],
      },
      // {
      //   title: 'Truyện sưu tầm',
      //   menu: [
      //     {
      //       page: '/collected',
      //       categoryId: '1',
      //       title: 'Truyện ngắn',
      //     },
      //     {
      //       page: '/collected',
      //       categoryId: '2',
      //       title: 'Truyện dài',
      //     },
      //     {
      //       page: '/collected',
      //       categoryId: '3',
      //       title: 'Tản văn',
      //     },
      //   ],
      // },
    ],
  };

  navCreateBook = {
    title: 'Đăng truyện',
    href: 'https://w.awread.vn',
  };

  navPublic = {
    title: 'Cộng đồng',
    dropdown: [
      {
        page: '/introduction',
        title: 'Về chúng tôi',
      },
      // {
      //   page: '/community',
      //   title: 'Tham gia với chúng tôi',
      // },
      {
        page: '/news',
        title: 'Tin tức',
      },
    ],
  };
  @Input() color = 'text-white';
  constructor() { }

  ngOnInit(): void { }
}
