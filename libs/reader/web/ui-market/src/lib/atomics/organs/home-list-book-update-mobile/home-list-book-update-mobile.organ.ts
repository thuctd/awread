import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'organ-home-list-book-update-mobile',
  templateUrl: './home-list-book-update-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      @media only screen and (max-width: 400px) {
        .px-2 {
          padding-left: 0.4rem;
          padding-right: 0.4rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListBookUpdateMobileOrgan implements OnInit {
  @Input() arrowLeftIcon = faChevronLeft;
  @Input() arrowRightIcon = faChevronRight;
  @Input() loading;
  @Input() totalBook;
  @Input() page = {
    name: 'TRUYỆN MỚI CẬP NHẬT',
    href: ['/index', 'latest-books'],
  };
  @Input() books = [];
  @Input() hasNextPage;
  @Input() categories = [];
  @Input() currentPage = 1;
  @Output() pageChange = new EventEmitter();
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

  @Output() emitBooks = new EventEmitter();

  @Input() tabs = [
    {
      name: 'Tất cả',
      isNovel: false,
    },
    {
      name: 'Truyện dài',
      isNovel: false,
    },
    {
      name: 'Truyện ngắn',
      isNovel: false,
    },
    {
      name: 'Tản văn',
      isNovel: true,
    },
  ];

  constructor() { }

  ngOnInit(): void { }


  onClickPage(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }
}
