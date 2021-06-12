import { ActivatedRoute, Router } from '@angular/router';
import { BooksFacade, ListBooksFacade } from '@awread/core/books';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  Injectable,
  OnInit,
  Directive,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class LatestBooksPage implements OnInit {
  books$: Observable<any>;
  isLoading$: Observable<boolean>;
  hasNextPage$: Observable<boolean>;
  totalBook$: any;
  title = 'TRUYỆN MỚI CẬP NHẬT';

  constructor(private listBooksFacade: ListBooksFacade, private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.watchRouting();
  }

  watchRouting() {
    this.activatedRoute.paramMap.subscribe((params) => {
      switch (params.get('booktype')) {
        case 'top-books':
          this.title = "TOP PHỔ BIẾN"
          this.listBooksFacade.getTopBookByCursor().pipe(untilDestroyed(this)).subscribe();
          this.books$ = this.booksFacade.topBooksQuery.selectAll();
          this.totalBook$ = this.booksFacade.topBooksQuery.selectTotalBook();
          this.hasNextPage$ = this.booksFacade.topBooksQuery.selectHasNextPage();
          this.isLoading$ = this.booksFacade.topBooksQuery.selectLoading();
          break;
        case 'good-books':
          this.title = "TOP TRUYỆN ĐƯỢC ĐÁNH GIÁ TÍCH CỰC";
          this.listBooksFacade.getGoodBookByCursor().pipe(untilDestroyed(this)).subscribe();
          this.books$ = this.booksFacade.goodBooksQuery.selectAll();
          this.totalBook$ = this.booksFacade.goodBooksQuery.selectTotalBook();
          this.isLoading$ = this.booksFacade.goodBooksQuery.selectLoading();
          this.hasNextPage$ = this.booksFacade.goodBooksQuery.selectHasNextPage();
          break;
        case 'feature-books':
          this.title = "TRUYỆN NỔI BẬT"
          this.listBooksFacade.getFeaturetBookByCursor().pipe(untilDestroyed(this)).subscribe();
          this.books$ = this.booksFacade.featureBooksQuery.selectAll();
          this.totalBook$ = this.booksFacade.featureBooksQuery.selectTotalBook();
          this.isLoading$ = this.booksFacade.featureBooksQuery.selectLoading();
          this.hasNextPage$ = this.booksFacade.featureBooksQuery.selectHasNextPage();
          break;
        case 'latest-books':
          this.title = "TRUYỆN MỚI CẬP NHẬT"
          this.listBooksFacade.getLatestBookByCursor().pipe(untilDestroyed(this)).subscribe();
          this.books$ = this.booksFacade.latestBooksQuery.selectAll();
          this.totalBook$ = this.booksFacade.latestBooksQuery.selectTotalBook();
          this.isLoading$ = this.booksFacade.latestBooksQuery.selectLoading();
          this.hasNextPage$ = this.booksFacade.latestBooksQuery.selectHasNextPage();
          break;
        default:
          this.router.navigate(['/not-found']);
          break;
      }
    })
  }

  onMoreBooks(event) {
    this.fetchBooks();
  }

  private fetchBooks() {
    this.activatedRoute.paramMap.subscribe((params) => {
      switch (params.get('booktype')) {
        case 'top-books':
          if (this.booksFacade.topBooksQuery.getHasNextPage()) {
            this.listBooksFacade.getTopBookByCursor('add').pipe(untilDestroyed(this)).subscribe();
          }
          break;
        case 'good-books':
          if (this.booksFacade.goodBooksQuery.getHasNextPage()) {
            this.listBooksFacade.getGoodBookByCursor('add').pipe(untilDestroyed(this)).subscribe();
          }
          break;
        case 'feature-books':
          if (this.booksFacade.featureBooksQuery.getHasNextPage()) {
            this.listBooksFacade.getFeaturetBookByCursor('add').pipe(untilDestroyed(this)).subscribe();
          }
          break;
        case 'latest-books':
          if (this.booksFacade.latestBooksQuery.getHasNextPage()) {
            this.listBooksFacade.getLatestBookByCursor('add').pipe(untilDestroyed(this)).subscribe();
          }
          break;
      }
    })
  }
}
