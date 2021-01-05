import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-navbar-menu',
  templateUrl: './navbar-menu.organ.html',
  styleUrls: ['./navbar-menu.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMenuOrgan implements OnInit {
  menu = [
    {
      "title": "Trang chủ",
      "href": "/home"
    },
    {
      "title": "Truyện",
      "href": "/market",
      "dropdown": [
          {
            "title": "Truyện tự sáng tác",
            "menu":[
              {
                "href": "/",
                "title":"Truyện dài"
              },
              {
                "href": "/",
                "title":"Truyện ngắn"
              },
              {
                "href": "/",
                "title":"Truyện tản văn"
              },
            ] 
          },
          {
            "title": "Truyện sưu tầm",
            "menu":[
              {
                "href": "/",
                "title":"Truyện dài"
              },
              {
                "href": "/",
                "title":"Truyện ngắn"
              },
              {
                "href": "/",
                "title":"Truyện tản văn"
              },
            ] 
          }
        ]
    },
    {
      "title": "Đăng truyện",
      "href": "/home"
    },
    {
      "title": "Cộng đồng",
      "href": "/market",
      "dropdown": [
          {
            "href": "/",
            "title":"Về chúng tôi"
          },
          {
            "href": "/",
            "title":"Tham gia với chúng tôi"
          },
          {
            "href": "/",
            "title":"Tin tức",
            "tag": "New"
          },

        ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
