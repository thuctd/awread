import { ChangeDetectorRef } from '@angular/core';
import { takeWhile, switchMap, retry, tap, takeUntil, map } from 'rxjs/operators';
import { of, Subject, Observable, interval } from 'rxjs';
import { Directive, Injectable, OnInit, OnDestroy } from '@angular/core';
import { Genre } from '@awread/core/genres';
import { BooksFacade } from '@awread/core/books';
import { GenresFacade } from '@awread/core/genres';
import { SliderFacade } from '@awread/core/slider';
import { CategoriesFacade } from '@awread/core/categories';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit, OnDestroy {
  defaultGenre = 'Tình cảm';
  destroy$ = new Subject();
  imageObject$ = this.sliderFacede.slider$;
  categories$ = this.categoriesFacade.categories$;
  genres$ = this.genresFacade.genres$.pipe(
    map((genres) =>
      genres.filter((genre) => ['Lãng mạn', 'Hài hước', 'Tình cảm', 'Thanh xuân', 'Gia đình'].includes(genre.name))
    )
  );

  goodBookList$ = this.booksFacade.goodBooks$;
  latestBooks$ = this.booksFacade.latestBooks$;
  featureBookList$ = this.booksFacade.featureBooks$;
  genreBooks$ = this.booksFacade.genreBooks$;
  isLoadingLatest$ = this.booksFacade.latestBooksQuery.selectLoading();
  isLoadingFeature$ = this.booksFacade.featureBooksQuery.selectLoading();
  totalBookLatest$ = this.booksFacade.latestBooksQuery.selectTotalBook();
  totalBookFeature$ = this.booksFacade.featureBooksQuery.selectTotalBook();
  currentPageLatest$ = this.booksFacade.latestBooksQuery.select((state) => state.currentPage);
  hasNextPageLatest$ = this.booksFacade.latestBooksQuery.select((state) => state.hasNextPage);
  currentPageFeature$ = this.booksFacade.featureBooksQuery.select((state) => state.currentPage);
  hasNextPageFeature$ = this.booksFacade.featureBooksQuery.select((state) => state.hasNextPage);

  constructor(
    private booksFacade: BooksFacade,
    private sliderFacede: SliderFacade,
    private genresFacade: GenresFacade,
    private categoriesFacade: CategoriesFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.booksFacade.getGoodBooks().pipe(takeUntil(this.destroy$)).subscribe();
    this.booksFacade.getLatestBooks().pipe(takeUntil(this.destroy$)).subscribe();
    this.booksFacade.getFeatureBooks().pipe(takeUntil(this.destroy$)).subscribe();
    this.booksFacade.getGenreBooks().pipe(takeUntil(this.destroy$)).subscribe();
    this.genresFacade.getAllGenres().pipe(takeUntil(this.destroy$)).subscribe();
    this.sliderFacede.getAllSlider().pipe(takeUntil(this.destroy$)).subscribe();
    this.loadGenreBookFirstByGenre().pipe(takeUntil(this.destroy$)).subscribe();
  }

  filterItemsByGenre(genre: Genre) {
    this.booksFacade.setCurrentGenreGenreBook(genre.genreId);
  }

  filterItemsByCategory(category) {
    this.booksFacade.setCurrentPageLatestBook(1);
    this.booksFacade.setCurrentCategory(category.categoryId);
    this.cd.detectChanges();
  }

  private loadGenreBookFirstByGenre() {
    return this.genres$.pipe(
      takeWhile((val) => val !== undefined, false),
      tap((items) => {
        if (!items.length) {
          return of([]);
        }
        const genre = items.find(item => item.name.includes(this.defaultGenre));
        this.booksFacade.setCurrentGenreGenreBook(genre.genreId);
      })
    );
  }

  pageChangeLatest(activePageNumber: number) {
    this.booksFacade.setCurrentPageLatestBook(activePageNumber);
  }

  pageChangeFeature(activePageNumber: number) {
    this.booksFacade.setCurrentPageFeatureBook(activePageNumber);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
