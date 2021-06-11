import { Observable } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive, HostListener, ChangeDetectorRef } from '@angular/core';
import { BooksFacade } from '@awread/core/books';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class TopBooksPage implements OnInit {
  topBooks$: Observable<any>;
  isLoading$: Observable<boolean>;
  hasMore$: Observable<boolean>;
  totalBook$: any;

  constructor(
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.topBooks$ = this.booksFacade.topBooksQuery.selectAll();
    this.totalBook$ = this.booksFacade.topBooksQuery.selectTotalBook();
    this.hasMore$ = this.booksFacade.topBooksQuery.selectHasMore();
    this.isLoading$ = this.booksFacade.topBooksQuery.selectLoading();
  }

  @HostListener('window:scroll', ['$event'])
  onMoreBooks() {
    if (window.innerHeight + window.scrollY + 800 >= document.body.scrollHeight) {
      this.fetchBooks();
    }
  }

  private fetchBooks() {
    if (this.booksFacade.topBooksQuery.getHasMore()) {
      this.booksFacade.getTopBooks().subscribe();
    }
  }

}
