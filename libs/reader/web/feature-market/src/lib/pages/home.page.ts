import { tap, first, takeWhile, delay, switchMap } from 'rxjs/operators';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Directive, Injectable, OnInit } from '@angular/core';
import { Genre } from 'libs/core/genres/src/lib/models';
import { BooksFacade } from 'libs/core/books/src/lib/facades/books.facade';
import { GenresFacade } from 'libs/core/genres/src/lib/facades/genres.facade';
import { SliderFacade } from 'libs/core//slider/src/lib/facades/slider.facade';
import { CategoryFacade } from 'libs/core/categories/src/lib/facades/category.facade';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit {
  bookList$ = this.booksFacade.books$;
  goodBookList$ = this.booksFacade.goodBooks$;
  categoryBookList$ = this.booksFacade.categoryBooks$;
  genreBookList$ = this.booksFacade.genreBooks$;
  featureBookList$ = this.booksFacade.featureBooks$;
  latestBookList$ = this.booksFacade.latestBooks$;
  genres$ = this.genresFacade.genres$;
  imageObject$ = this.sliderFacede.slider$;
  isLoading$ = this.booksFacade.selectLoadingAkita();
  filteredBooks$;
  loading$ = false;

  constructor(
    private booksFacade: BooksFacade,
    private sliderFacede: SliderFacade,
    private genresFacade: GenresFacade,
    private categoryFacade: CategoryFacade
  ) { }

  ngOnInit(): void {
    this.categoryFacade.getAllCategories().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.sliderFacede.getAllSlider().subscribe();
    this.booksFacade.getGoodBooks().subscribe();
    this.booksFacade.getLatestBooks().subscribe();
    this.booksFacade.getFeatureBooks().subscribe();
    this.loadFirstByGenre();
  }

  filterItemsByGenre(genre: Genre) {
    this.loading$ = true;
    setTimeout(() => {
      this.filteredBooks$ = this.booksFacade.getGenreBooks(genre.genreId);
      this.loading$ = false;
    }, 200);
  }

  private loadFirstByGenre() {
    this.filteredBooks$ = this.genres$.pipe(
      takeWhile(val => val !== undefined, false),
      switchMap((items) => {
        if (!items.length) {
          return [];
        }
        return this.booksFacade.getGenreBooks(items[0].genreId);
      })
    );
  }
}
