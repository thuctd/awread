import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'organ-home-list-book-featured-mobile',
  templateUrl: './home-list-book-featured-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListBookFeaturedMobileOrgan implements OnInit {
  @Input() arrowLeftIcon = faChevronLeft;
  @Input() arrowRightIcon = faChevronRight;
  @Input() page = {
    name: 'Truyện nổi bật',
    href: ['/feature-books']
  };
  @Output() pageChange = new EventEmitter();
  @Input() counter = Array;
  @Input() currentPage;
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';
  @Input() books = [];

  @Input() displayUI = {
    ui: {
      isAuthor: false,
      isRating: false,
      isIcon: false,
      isDate: false,
    },
    size: {
      sizeTitle: 's',
      sizeBtn: false,
    },
  };

  @Input() totalBook;
  @Input() loading;
  @Input() hasNextPage;

  constructor() { }

  ngOnInit(): void { }

  onClickPage(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }
}
