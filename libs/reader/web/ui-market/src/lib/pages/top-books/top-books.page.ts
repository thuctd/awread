import { Observable } from 'rxjs';
import { PersistNgFormPlugin } from '@datorama/akita';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive } from '@angular/core';
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
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;

  constructor(
    private fb: FormBuilder,
    private booksFacade: BooksFacade,
    private genresFacade: GenresFacade,
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.initForm();
    this.topBooks$ = this.booksFacade.topBooksQuery.selectAll();
    this.isLoading$ = this.booksFacade.topBooksQuery.selectLoading();
    this.genresFacade.getAllGenres().subscribe();
  }

  onMoreBooks() {
    this.fetchBooks();
  }

  filterBooks() {
    this.booksFacade.getTopBooks();
  }

  private fetchBooks() {
    if (this.booksFacade.topBooksQuery.getHasMore()) {
      this.booksFacade.getTopBooks().subscribe();
    }
  }

  private initForm() {
    this.filtersForm = this.fb.group({
      typeBook: [''],
      genres: [''],
      criteria: [''],
      completed: [''],
      postingDate: [''],
    });

    this.persistForm = new PersistNgFormPlugin(
      this.booksFacade.booksQuery,
      'ui.filters')
      .setForm(this.filtersForm);
  }

}
