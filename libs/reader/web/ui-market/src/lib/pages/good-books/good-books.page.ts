import { BooksFacade } from '@awread/core/books';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive, ChangeDetectorRef, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class GoodBooksPage implements OnInit {
  goodBooks$: Observable<any>;
  isLoading$: Observable<boolean>;
  hasMore$: Observable<boolean>;
  totalBook$: any;
  title = 'TOP TRUYỆN ĐƯỢC ĐÁNH GIÁ TÍCH CỰC';

  constructor(
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.goodBooks$ = this.booksFacade.goodBooksQuery.selectAll();
    this.totalBook$ = this.booksFacade.goodBooksQuery.selectTotalBook();
    this.isLoading$ = this.booksFacade.goodBooksQuery.selectLoading();
    this.hasMore$ = this.booksFacade.goodBooksQuery.selectHasMore();
  }

  @HostListener('window:scroll', ['$event'])
  onMoreBooks() {
    if (window.innerHeight + window.scrollY + 800 >= document.body.scrollHeight) {
      this.fetchBooks();
    }
  }

  private fetchBooks() {
    if (this.booksFacade.goodBooksQuery.getHasMore()) {
      this.booksFacade.getGoodBooks().subscribe();
    }
  }

}
