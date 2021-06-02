import { Observable } from 'rxjs';
import { PersistNgFormPlugin } from '@datorama/akita';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive } from '@angular/core';
import { BooksFacade } from '@awread/core/books';
import { TopBooksQuery } from 'libs/core/books/src/lib/states/top-books';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class TopBooksPage implements OnInit {
  topBooks$: Observable<any>;
  isLoading$: Observable<boolean>;
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;

  constructor(
    private fb: FormBuilder,
    private topBooksQuery: TopBooksQuery,
    private booksFacade: BooksFacade,
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.initForm();
    this.topBooks$ = this.topBooksQuery.selectAll();
    this.isLoading$ = this.topBooksQuery.selectLoading();
  }

  onMoreBooks() {    
    this.fetchBooks();
  }

  private fetchBooks() {
    if (this.topBooksQuery.getHasMore()) {
      this.booksFacade.getTopBooks(this.topBooksQuery.getSizePage()).subscribe();
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
