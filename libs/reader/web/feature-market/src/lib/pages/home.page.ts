import { async } from '@angular/core/testing';
import { CategoryFacade } from './../facades/category.facade';
import { Directive, Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { BooksFacade, EventFacade, GenresFacade } from '../facades';
import { Genre } from '../models';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  goodBookList$ = this.booksFacade.goodBookList$;
  categoryBookList$ = this.booksFacade.categoryBookList$;
  genreBookList$ = this.booksFacade.genreBookList$;
  featureBookList$ = this.booksFacade.featureBookList$;
  latestBookList$ = this.booksFacade.latestBookList$;
  genreList$ = this.genresFacade.genreList$;
  imageObject$ = this.eventsFacede.eventList$;
  isLoading$ = this.booksFacade.selectLoadingAkita();
  filteredBooks$;
  loading$ = false;

  constructor(private booksFacade: BooksFacade, private eventsFacede: EventFacade, private genresFacade: GenresFacade, private categoryFacade: CategoryFacade) { }

  ngOnInit(): void {
    this.categoryFacade.getAllCategories().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.eventsFacede.getAllEvents().subscribe();
    this.booksFacade.getGoodBooks().subscribe();
    this.booksFacade.getLatestBooks().subscribe();
    this.booksFacade.getFeatureBooks().subscribe();
    this.loadFirstByGenre();
  }

  filterItemsByGenre(genre: Genre) {
    this.loading$ = true;
    setTimeout(() => {
      this.filteredBooks$ = this.booksFacade.getGenreBooks(genre.id);
      this.loading$ = false;
    }, 200);
  }

  private loadFirstByGenre() {
    this.filteredBooks$ = this.bookList$.pipe(
      map((items) =>
        items.filter((item) => {
          return item.genres.includes(items[0].id);
        })
      )
    );
  }
}
