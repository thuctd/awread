import { Directive, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BooksFacade, GenresFacade } from '../facades';
import { Genre } from '../models';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  genreList$ = this.genresFacade.genreList$;
  booksByGenre: Genre[];
  filteredBooks$;
  loading = false;

  constructor(private booksFacade: BooksFacade, private genresFacade: GenresFacade, private router: Router) { }

  ngOnInit(): void {
    this.booksFacade.getAllBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.loadFirstByGenre();
  }

  filterItemsByGenre(genre: Genre) {
    this.loading = true;
    setTimeout(() => {
      this.filteredBooks$ = this.bookList$.pipe(
        map((items) =>
          items.filter((item) => {
            this.loading = false;
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
