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
export class HomeListBookUpdateMobileOrgan implements OnInit, OnChanges {
  @Input() arrowLeftIcon = faChevronLeft;
  @Input() arrowRightIcon = faChevronRight;
  @Input() loading;
  @Input() totalBook;
  @Input() titlePage = 'Truyện mới cập nhật';
  @Input() books = [];
  @Input() categories = [];
  activePage: number = 1;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
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
  @Output() displayActivePage = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): any {  
      this.activePage = 1;  
      this.onPageChange.emit(1);  
  }  

  onClickPage(pageNumber: number): void {
    this.activePage = pageNumber;
    this.onPageChange.emit(this.activePage);
  }
}
