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
  goodBookList$ = this.booksFacade.goodBooks$;
  categoryBookList$ = this.booksFacade.categoryBooks$;
  genreBookList$ = this.booksFacade.genreBooks$;
  featureBookList$ = this.booksFacade.featureBooks$;
  genreBooks$ = this.booksFacade.genreBooks$;
  categories$ = this.categoriesFacade.categories$;
  genres$ = this.genresFacade.genres$.pipe(map(genres => genres.filter(genre => ['Lãng mạn', 'Hài hước', 'Tình cảm', 'Thanh xuân', 'Gia đình'].includes(genre.name))));
  imageObject$ = this.sliderFacede.slider$;
  isLoading$: Observable<boolean>;
  filteredBooks$;
  categoryBooks$;
  categoryId = '';
  loading$ = false;

  constructor(
    private booksFacade: BooksFacade,
    private sliderFacede: SliderFacade,
    private genresFacade: GenresFacade,
    private categoriesFacade: CategoriesFacade,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.genresFacade.getAllGenres().subscribe();
    this.sliderFacede.getAllSlider().subscribe();
    this.booksFacade.getGoodBooks().subscribe();
    this.booksFacade.getFeatureBooks().subscribe();
    this.isLoading$ = this.booksFacade.latestBooksQuery.selectLoading();
    this.loadFirstByGenre();
    this.getAllLatestBooks();
  }

  filterItemsByGenre(genre: Genre) {
    this.filteredBooks$ = this.booksFacade.getGenreBooks(genre.genreId);
  }

  filterItemsByCategory(category: Category) {
    this.categoryId = category.categoryId;
    this.categoryBooks$ = this.booksFacade.getLatestBooks(category.categoryId, 0).pipe(debounceTime(200));
    this.cd.detectChanges();
  }

  getAllLatestBooks() {
    this.categoryBooks$ = this.booksFacade.getLatestBooks('', 0).pipe(debounceTime(200));
    this.cd.detectChanges();
  }

  private loadFirstByGenre() {
    this.filteredBooks$ = this.genres$.pipe(
      takeWhile(val => val !== undefined, false),
      switchMap((items) => {
        if (!items.length) {
          return of([]);
        }
        return this.booksFacade.getGenreBooks(items[0].genreId);
      })
    );
  }

  displayActivePage(activePageNumber: number) {
    this.categoryBooks$ = this.booksFacade.getLatestBooks(this.categoryId, activePageNumber).pipe(debounceTime(200));
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
