import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface Category {
  id: number;
  title: string;
  isActive: boolean;
}

export interface Item {
  id: number;
  imageUrl: string;
  title: string;
  categories: number[];
}

@Component({
  selector: 'home-tags',
  templateUrl: './home-tags.organ.html',
  styleUrls: ['./home-tags.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTagsOrgan implements OnInit {
  prevIcon = `<img src="/global-assets/images/arrow_left.png" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.png" alt="arrow_right">`;
  @Input() titlePage = 'Tags';

  @Input() categories: Category[] = [
    {
      id: 1,
      title: 'Truyện dài',
      isActive: true,
    },
    {
      id: 2,
      title: 'Truyện ngắn',
      isActive: false,
    },
    {
      id: 3,
      title: 'Tản văn',
      isActive: false,
    },
  ];

  @Input() items: Item[] = [
    {
      id: 1,
      title: 'Cô gái theo đuổi năm nào',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [1],
    },
    {
      id: 2,
      title: 'Cô gái theo đuổi năm nào',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [2],
    },
    {
      id: 3,
      title: 'Cố lên em ơi',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [1, 2],
    },
    {
      id: 4,
      title: 'Em là nhà',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [1],
    },
    {
      id: 5,
      title: 'Nên đên vẫn có em!',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [1],
    },
    {
      id: 6,
      title: 'Bang bang bang',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [2],
    },
    {
      id: 7,
      title: 'Ở nơi ấy',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [1, 2],
    },
    {
      id: 8,
      title: 'Cô gái chúng ta cùng theo đuổi',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [2],
    },
    {
      id: 9,
      title: 'Bang bang bang',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [2],
    },
    {
      id: 10,
      title: 'Ở nơi ấy',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [1, 2],
    },
    {
      id: 11,
      title: 'Cô gái chúng ta cùng theo đuổi',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categories: [2],
    },
  ];

  @Input() customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    nav: true,
    navText: [this.prevIcon, this.nextIcon],
    responsive: {
      0: {
        items: 2,
      },
      320: {
        items: 3,
      },
      380: {
        items: 3,
      },
      600: {
        items: 4,
      },
      768: {
        items: 5,
      },
      940: {
        items: 6,
      },
      1280: {
        items: 8,
      },
    },
  };

  filteredItems: Item[] = [...this.items];
  constructor() {}

  ngOnInit(): void {
    this.loadFirstByCategory();
  }

  //Lấy danh sách theo thể loại
  filterItemsByCategory(category: Category) {
    setTimeout(() => {
      this.filteredItems = this.items.filter((item: Item) => {
        return item.categories.includes(category.id);
      });
    }, 100);
  }

  //Lấy danh sách book của thể loại đầu tiên để hiện thị khi loại
  private loadFirstByCategory() {
    this.filteredItems = this.items.filter((item) => {
      return item.categories.includes(this.categories[0].id);
    });
  }

  toggleTabs(currentTab) {
    this.categories.forEach((tab) => {
      tab.isActive = false;
      if (tab.title === currentTab.title) {
        tab.isActive = true;
      }
    });
  }
}
