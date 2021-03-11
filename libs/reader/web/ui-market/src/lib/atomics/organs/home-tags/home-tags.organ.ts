import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

export interface Category {
  id: number;
  title: string;
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
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
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
    },
    {
      id: 2,
      title: 'Truyện ngắn',
    },
    {
      id: 3,
      title: 'Tản văn',
    },
  ];

  @Input() items: Item[] = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/300x150/FF0000/FFFFFF?text=1',
      title: 'One',
      categories: [1],
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/300x150/FF0000/FFFFFF?text=1',
      title: 'One',
      categories: [2],
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/300x150/FF0000/FFFFFF?text=1',
      title: 'One',
      categories: [1, 2],
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/300x150/FF0000/FFFFFF?text=1',
      title: 'One',
      categories: [1],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.loadFirstByCategory();
  }

  filteredItems: Item[] = [...this.items];

  //Lấy danh sách theo thể loại
  filterItemsByCategory(category: Category) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.categories.includes(category.id);
    });
  }

  //Lấy danh sách book của thể loại đầu tiên để hiện thị khi loại
  private loadFirstByCategory() {
    this.filteredItems = this.items.filter((item) => {
      return item.categories.includes(this.categories[0].id);
    });
  }
}
