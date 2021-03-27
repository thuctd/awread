import { CategoryFacade } from './../facades/category.facade';
import { Directive, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BooksFacade, EventFacade, GenresFacade } from '../facades';
import { Genre } from '../models';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  genreList$ = this.genresFacade.genreList$;
  evetList$ = this.eventsFacede.eventList$;
  isLoading$ = this.booksFacade.selectLoadingAkita();
  getGoodBooks;
  getLatestBooks;
  getFeatureBooks;
  filteredBooks$;
  loading$ = false;

  constructor(
    private booksFacade: BooksFacade,
    private eventsFacede: EventFacade,
    private genresFacade: GenresFacade,
    private categoryFacade: CategoryFacade
  ) { }

  ngOnInit(): void {
    this.categoryFacade.getAllCategories().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.eventsFacede.getAllEvents().subscribe();
    this.booksFacade.getGoodBooks().subscribe((books) => {
      this.getGoodBooks = books.slice(0, 5);
    });
    this.booksFacade.getLatestBooks().subscribe((books) => {
      this.getLatestBooks = books;
    });
    this.booksFacade.getFeatureBooks().subscribe((books) => {
      this.getFeatureBooks = books.slice(0, 8);
    });
    this.loadFirstByGenre();
  }

  filterItemsByGenre(genre: Genre) {
    this.loading$ = true;
    setTimeout(() => {
      this.filteredBooks$ = this.bookList$.pipe(
        map((items) =>
          items.filter((item) => {
            this.loading$ = false;
            return item.genres.includes(genre.id);
          })
        )
      );
    }, 1000);
  }

  private loadFirstByGenre() {
    this.filteredBooks$ = this.bookList$.pipe(
      map((items) =>
        items.filter((item) => {
          return item.genres.includes('1');
        })
      )
    );
  }
}
