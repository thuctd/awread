import { ChangeDetectorRef } from '@angular/core';
import { takeWhile, switchMap, retry, tap, takeUntil, map } from 'rxjs/operators';
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
  hasMoreLatest$ = this.booksFacade.latestBooksQuery.select((state) => state.hasMore);
  currentPageFeature$ = this.booksFacade.featureBooksQuery.select((state) => state.currentPage);
  hasMoreFeature$ = this.booksFacade.featureBooksQuery.select((state) => state.hasMore);

  constructor(
    private booksFacade: BooksFacade,
    private sliderFacede: SliderFacade,
    private genresFacade: GenresFacade,
    private categoriesFacade: CategoriesFacade,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.booksFacade.getGoodBooks().pipe(takeUntil(this.destroy$)).subscribe();
    this.booksFacade.getLatestBooks().pipe(takeUntil(this.destroy$)).subscribe();
    this.booksFacade.getFeatureBooks().pipe(takeUntil(this.destroy$)).subscribe();
    this.genresFacade.getAllGenres().pipe(takeUntil(this.destroy$)).subscribe();
    this.sliderFacede.getAllSlider().pipe(takeUntil(this.destroy$)).subscribe();
    this.loadGenreBookFirstByGenre().pipe(takeUntil(this.destroy$)).subscribe();
  }

  filterItemsByGenre(genre: Genre) {
    this.booksFacade.setCurrentGenreGenreBook(genre.genreId);
  }

  filterItemsByCategory(category: Category) {
    this.booksFacade.setCurrentPageLatestBook(1);
    this.booksFacade.setCurrentCategory(category.categoryId);
    this.cd.detectChanges();
  }

  private loadGenreBookFirstByGenre() {
    return this.genres$.pipe(
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
  }

  pageChangeFeature(activePageNumber: number) {
    this.booksFacade.setCurrentPageFeatureBook(activePageNumber);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
