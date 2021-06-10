import { ChangeDetectorRef } from '@angular/core';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { takeWhile, switchMap, retry, tap, takeUntil, debounceTime, map } from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';
import { Directive, Injectable, OnInit, OnDestroy } from '@angular/core';
import { Genre } from '@awread/core/genres';
import { Category } from '@awread/core/categories';
import { BooksFacade } from '@awread/core/books';
import { GenresFacade } from '@awread/core/genres';
import { SliderFacade } from '@awread/core/slider';
import { CategoriesFacade } from '@awread/core/categories';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit, OnDestroy {
  destroy$ = new Subject();
  bookList$ = this.booksFacade.books$;
  imageObject$ = this.sliderFacede.slider$;
  goodBookList$ = this.booksFacade.goodBooks$;
  categoryBookList$ = this.booksFacade.categoryBooks$;
  genreBookList$ = this.booksFacade.genreBooks$;
  genreBooks$ = this.booksFacade.genreBooks$;
  categories$ = this.categoriesFacade.categories$;
  genres$ = this.genresFacade.genres$.pipe(
    map((genres) =>
      genres.filter((genre) =>
        ['Lãng mạn', 'Hài hước', 'Tình cảm', 'Thanh xuân', 'Gia đình'].includes(genre.name)
      )
    )
  );
  latestBooks$ = this.booksFacade.getLatestBooks();
  isLoadingLatest$: Observable<boolean>;
  totalBookLatest$: Observable<number>;
  featureBookList$;
  isLoadingFeature$: Observable<boolean>;
  totalBookFeature$: Observable<number>;
  currentPageLatest$ = this.booksFacade.latestBooksQuery.select((state) => state.currentPage);
  hasMoreLatest$ = this.booksFacade.latestBooksQuery.select((state) => state.hasMore);
  currentPageFeature$ = this.booksFacade.featureBooksQuery.select((state) => state.currentPage);
  hasMoreFeature$ = this.booksFacade.featureBooksQuery.select((state) => state.hasMore);
  filteredBooks$;
  categoryId = '';
  eventResetPage: Subject<void> = new Subject<void>();
  loading$ = false;

  constructor(
    private booksFacade: BooksFacade,
    private sliderFacede: SliderFacade,
    private genresFacade: GenresFacade,
    private categoriesFacade: CategoriesFacade,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.genresFacade.getAllGenres().subscribe();
    this.sliderFacede.getAllSlider().subscribe();
    this.booksFacade.getGoodBooks().subscribe();
    this.isLoadingLatest$ = this.booksFacade.latestBooksQuery.selectLoading();
    this.isLoadingFeature$ = this.booksFacade.featureBooksQuery.selectLoading();
    this.totalBookLatest$ = this.booksFacade.latestBooksQuery.selectTotalBook();
    this.totalBookFeature$ = this.booksFacade.featureBooksQuery.selectTotalBook();
    this.loadFirstByGenre();
    this.getAllFeatureBooks();
  }

  filterItemsByGenre(genre: Genre) {
    this.filteredBooks$ = this.booksFacade.getGenreBooks(genre.genreId);
  }

  filterItemsByCategory(category: Category) {
    this.booksFacade.setCurrentPageLatestBook(1);
    this.booksFacade.setCurrentCategory(category.categoryId);
    // this.categoryBooks$ = this.booksFacade.getLatestBooks(category.categoryId, 0).pipe(debounceTime(200));
    this.categoryId = category.categoryId;
    this.cd.detectChanges();
  }

  getAllFeatureBooks() {
    this.featureBookList$ = this.booksFacade.getFeatureBooks(0).pipe(debounceTime(200));
  }

  private loadFirstByGenre() {
    this.filteredBooks$ = this.genres$.pipe(
      takeWhile((val) => val !== undefined, false),
      switchMap((items) => {
        if (!items.length) {
          return of([]);
        }
        return this.booksFacade.getGenreBooks(items[0].genreId);
      })
    );
  }

  pageChange(activePageNumber: number) {
    this.booksFacade.setCurrentPageLatestBook(activePageNumber);
    // this.categoryBooks$ = this.booksFacade.getLatestBooks(this.categoryId, activePageNumber).pipe(debounceTime(200));
  }

  pageChangeFeature(activePageNumber: number) {
    this.booksFacade.setCurrentPageFeatureBook(activePageNumber);
    this.featureBookList$ = this.booksFacade
      .getFeatureBooks(activePageNumber)
      .pipe(debounceTime(200));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
