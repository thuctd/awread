import { BooksFacade } from '@awread/core/books';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive, ChangeDetectorRef, HostListener, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class LatestBooksPage implements OnInit, OnChanges {
  latestBooks$: Observable<any>;
  isLoading$: Observable<boolean>;
  hasMore$: Observable<boolean>;
  activePage = 0;
  totalBook$: any;
  title = 'TRUYỆN MỚI CẬP NHẬT';

  constructor(
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.latestBooks$ = this.booksFacade.latestBooksQuery.selectAll();
    this.totalBook$ = this.booksFacade.latestBooksQuery.selectTotalBook();
    this.isLoading$ = this.booksFacade.latestBooksQuery.selectLoading();
    this.hasMore$ = this.booksFacade.latestBooksQuery.selectHasMore();
  }

  ngOnChanges(): any {
    this.activePage = 0;
  }

  @HostListener('window:scroll', ['$event'])
  onMoreBooks() {
    if (window.innerHeight + window.scrollY + 696 >= document.body.scrollHeight) {
      this.fetchBooks();
    }
  }

  private fetchBooks() {
    if (this.booksFacade.latestBooksQuery.getHasMore()) {
      this.activePage = this.activePage + 1;
      this.booksFacade.getLatestBooks('', this.activePage, true).subscribe();
    }
  }

}
