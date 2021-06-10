import { BooksFacade } from '@awread/core/books';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive, OnChanges, HostListener, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class FeatureBooksPage implements OnInit {
  featureBooks$: Observable<any>;
  isLoading$: Observable<boolean>;
  hasMore$: Observable<boolean>;
  totalBook$: any;
  title = 'TRUYỆN NỔI BẬT';

  constructor(private booksFacade: BooksFacade, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.booksFacade.getFeatureBooks(true).pipe(untilDestroyed(this)).subscribe();
    this.featureBooks$ = this.booksFacade.featureBooksQuery.selectAll();
    this.totalBook$ = this.booksFacade.featureBooksQuery.selectTotalBook();
    this.isLoading$ = this.booksFacade.featureBooksQuery.selectLoading();
    this.hasMore$ = this.booksFacade.featureBooksQuery.selectHasMore();
  }

  @HostListener('window:scroll', ['$event'])
  onMoreBooks() {
    if (window.innerHeight + window.scrollY + 800 >= document.body.scrollHeight) {
      this.fetchBooks();
    }
  }

  private fetchBooks() {
    if (this.booksFacade.featureBooksQuery.getHasMore()) {
      // const nextPage = this.booksFacade.featureBooksQuery.getValue().currentPage + 1;
      // this.booksFacade.setCurrentPageFeatureBook(nextPage);
      this.booksFacade.getFeatureBooks(true).subscribe();
    }
  }
}
