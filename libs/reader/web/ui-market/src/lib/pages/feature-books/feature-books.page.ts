import { BooksFacade } from '@awread/core/books';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive, OnChanges, HostListener, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class FeatureBooksPage implements OnInit, OnChanges {
  featureBooks$: Observable<any>;
  isLoading$: Observable<boolean>;
  hasMore$: Observable<boolean>;
  activePage: number = 0;
  totalBook$: any;
  title = 'TRUYỆN NỔI BẬT';

constructor(
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.featureBooks$ = this.booksFacade.featureBooksQuery.selectAll();
    this.totalBook$ = this.booksFacade.featureBooksQuery.selectTotalBook();
    this.isLoading$ = this.booksFacade.featureBooksQuery.selectLoading();
    this.hasMore$ = this.booksFacade.featureBooksQuery.selectHasMore();
  }

  ngOnChanges(): any {  
    this.activePage = 0;  
  } 

  @HostListener('window:scroll', ['$event'])
  onMoreBooks() {
    const height = window.innerWidth <= 768 ? 630 : 400;
    if (window.innerHeight + window.scrollY + height >= document.body.scrollHeight) {
      this.fetchBooks();
    }
  }

  private fetchBooks() {
    if (this.booksFacade.featureBooksQuery.getHasMore()) {
      this.activePage = this.activePage + 1;     
      this.booksFacade.getFeatureBooks(this.activePage, true).subscribe();
    }
  }

}