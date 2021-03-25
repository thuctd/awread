import { Directive, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksFacade, CategoryFacade, GenresFacade } from '../facades';
import { Genre } from '../models';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  genreList$ = this.genresFacade.genreList$;
  isLoading$ = this.booksFacade.selectLoadingAkita();
  booksByGenre$;

  constructor(private booksFacade: BooksFacade, private genresFacade: GenresFacade, private router: Router) { }

  ngOnInit(): void {
    this.booksFacade.getAllBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
  }


  filterItemsByGenre(genre: Genre) {
    return this.booksFacade
      .getBooksByGenreId(genre.id)
      .subscribe();
  }
}
