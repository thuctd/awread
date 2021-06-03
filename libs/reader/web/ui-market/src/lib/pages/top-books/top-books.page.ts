import { Observable } from 'rxjs';
import { PersistNgFormPlugin } from '@datorama/akita';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive, HostListener } from '@angular/core';
import { BooksFacade } from '@awread/core/books';
import { GenresFacade } from '@awread/core/genres';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class TopBooksPage implements OnInit {
  topBooks$: Observable<any>;
  isLoading$: Observable<boolean>;
  genres$ = this.genresFacade.genres$;
  totalBook: number;

  constructor(
    private fb: FormBuilder,
    private booksFacade: BooksFacade,
    private genresFacade: GenresFacade,
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.topBooks$ = this.booksFacade.topBooksQuery.selectAll();
    this.isLoading$ = this.booksFacade.topBooksQuery.selectLoading();
    this.genresFacade.getAllGenres().subscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onMoreBooks() {
    if (window.innerHeight + window.scrollY + 500 >= document.body.scrollHeight) {
      this.fetchBooks();
    }
  }

  filterBooks() {
    this.booksFacade.getTopBooks();
  }

  private fetchBooks() {
    if (this.booksFacade.topBooksQuery.getHasMore()) {
      this.booksFacade.getTopBooks().subscribe();
    }
  }

}
