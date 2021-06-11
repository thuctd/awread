import { BooksFacade, ListBooksFacade } from '@awread/core/books';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  Injectable,
  OnInit,
  Directive,
  ChangeDetectorRef,
  HostListener,
  OnChanges,
} from '@angular/core';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class LatestBooksPage implements OnInit, OnChanges {
  latestBooks$: Observable<any>;
  isLoading$: Observable<boolean>;
  hasNextPage$: Observable<boolean>;
  activePage = 0;
  totalBook$: any;
  title = 'TRUYỆN MỚI CẬP NHẬT';

  constructor(private listBooksFacade: ListBooksFacade, private booksFacade: BooksFacade, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.listBooksFacade.getLatestBookByCursor().pipe(untilDestroyed(this)).subscribe();
    this.latestBooks$ = this.booksFacade.latestBooksQuery.selectAll();
    this.totalBook$ = this.booksFacade.latestBooksQuery.selectTotalBook();
    this.isLoading$ = this.booksFacade.latestBooksQuery.selectLoading();
    this.hasNextPage$ = this.booksFacade.latestBooksQuery.selectHasNextPage();
  }

  ngOnChanges(): any {
    this.activePage = 0;
  }

  // @HostListener('window:scroll', ['$event'])
  onMoreBooks(event) {
    console.log('fetching...', event);
    // if (window.innerHeight + window.scrollY + 800 >= document.body.scrollHeight) {
    this.fetchBooks();
    // }
  }

  private fetchBooks() {
    if (this.booksFacade.latestBooksQuery.getHasNextPage()) {
      this.listBooksFacade.getLatestBookByCursor('add').pipe(untilDestroyed(this)).subscribe();
    }
  }
}
