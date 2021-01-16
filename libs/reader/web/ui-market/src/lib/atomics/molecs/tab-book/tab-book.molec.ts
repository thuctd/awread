import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'tab-book',
  templateUrl: './tab-book.molec.html',
  styleUrls: ['./tab-book.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBookMolec implements OnInit {

  @Input() tabBooks = [{
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    srcImg: 'https://tmthan.com/wp-content/uploads/2015/10/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.jpg',
    isActive: true,
  }, {
    title: 'Yêu em từ cái nhìn đầu tiên',
    srcImg: 'https://tmthan.com/wp-content/uploads/2015/10/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.jpg',
    isActive: false,
  }, {
    title: 'Tháng 4 là lời nói dối của em',
    srcImg: 'https://tmthan.com/wp-content/uploads/2015/10/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.jpg',
    isActive: false,
  }, {
    title: 'Em là nhà!!!',
    srcImg: 'https://tmthan.com/wp-content/uploads/2015/10/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.jpg',
    isActive: false,
  }, {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    srcImg: 'https://tmthan.com/wp-content/uploads/2015/10/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.jpg',
    isActive: true,
  }, {
    title: 'Yêu em từ cái nhìn đầu tiên',
    srcImg: 'https://tmthan.com/wp-content/uploads/2015/10/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.jpg',
    isActive: false,
  }, {
    title: 'Tháng 4 là lời nói dối của em',
    srcImg: 'https://tmthan.com/wp-content/uploads/2015/10/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.jpg',
    isActive: false,
  }, {
    title: 'Em là nhà!!!',
    srcImg: 'https://tmthan.com/wp-content/uploads/2015/10/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.jpg',
    isActive: false,
  }];

  constructor() { }

  ngOnInit(): void { }

}
