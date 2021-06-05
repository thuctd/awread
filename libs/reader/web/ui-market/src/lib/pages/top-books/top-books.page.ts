import { Observable } from 'rxjs';
import { PersistNgFormPlugin } from '@datorama/akita';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Injectable, OnInit, Directive, HostListener, ChangeDetectorRef } from '@angular/core';
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
  totalBook$: any;

  constructor(
    private fb: FormBuilder,
    private booksFacade: BooksFacade,
    private genresFacade: GenresFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.topBooks$ = this.booksFacade.topBooksQuery.selectAll();
    this.totalBook$ = this.booksFacade.topBooksQuery.selectTotalBook();
    this.isLoading$ = this.booksFacade.topBooksQuery.selectLoading();
    this.genresFacade.getAllGenres().subscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onMoreBooks() {
    const height = window.innerWidth <= 768 ? 660 : 450;
    if (window.innerHeight + window.scrollY + height >= document.body.scrollHeight) {
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
