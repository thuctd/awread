import { FormControl } from '@angular/forms';
import { BooksFacade } from '@awread/reader/web/feature-market';
import { Directive, Injectable, OnInit } from '@angular/core';
import { BooksQuery } from '../states/books';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, of } from 'rxjs';
export class BookUtil {
  static searchString(str: string, searchString: string): boolean {
    str = str ?? '';
    searchString = searchString ?? '';
    return str.trim().toLowerCase().includes(searchString.trim().toLowerCase());
  }
}
@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class SearchPage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  searchControl: FormControl = new FormControl('');
  results$;
  search$;

  constructor(private booksFacade: BooksFacade, private booksQuery: BooksQuery, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.search$ = params['search'];
      this.searchControl.setValue(params['search'])
    });
    const search$ = this.searchControl.valueChanges.pipe(debounceTime(50));
    this.results$ = combineLatest([search$, this.booksQuery.bookList$]).pipe(
      untilDestroyed(this),
      switchMap(([term, books]) => {
        const matchBooks = books.filter((book) => {
          console.log('asd', term);
          const foundInTitle = BookUtil.searchString(book.title, term);
          return foundInTitle;
        });
        return of(matchBooks);
      })
    );
    this.booksFacade.getAllBooks().subscribe();
  }
}
