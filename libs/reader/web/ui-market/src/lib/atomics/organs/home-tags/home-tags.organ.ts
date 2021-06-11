import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'home-tags',
  templateUrl: './home-tags.organ.html',
  styleUrls: ['./home-tags.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTagsOrgan implements OnInit {
  @ViewChild('widgetsContent', { static: true }) widgetsContent: ElementRef<HTMLDivElement>;
  @ViewChild('widthMax', { static: true }) widthMax: ElementRef<HTMLDivElement>;
  @Input() arrowLeftIcon = faChevronLeft;
  @Input() arrowRightIcon = faChevronRight;
  currentGenre = null;
  currentIndex = 0;
  prevIcon = `<img src="/global-assets/images/arrow_left.webp" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.webp" alt="arrow_right">`;
  @Input() titlePage = 'Thể loại';
  @Input() loading: false | true = false;
  @Output() filterItemsByGenre = new EventEmitter();
  @Input() genres = [
    {
      genreId: 1,
      name: 'Lãng mạn',
    },
  ];

  @Input() maxWidth;

  @Input() items = [];

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
      360: {
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

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.maxWidth = this.widthMax.nativeElement.clientWidth;
  }

  setActiveGenre(genre, index) {
    this.currentGenre = genre;
    this.currentIndex = index;
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 150,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 150,
      behavior: 'smooth',
    });
  }
}
