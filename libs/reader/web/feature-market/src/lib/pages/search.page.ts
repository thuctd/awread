import { FormControl } from '@angular/forms';
import { BooksFacade } from '@awread/reader/web/feature-market';
import { Directive, Injectable, OnInit } from '@angular/core';
import { Book } from '../models';
import { BooksQuery } from '../states/books';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class SearchPage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  searchControl: FormControl = new FormControl('');
  results$: Observable<Book[]>;
  search$;

  constructor(private booksFacade: BooksFacade, private booksQuery: BooksQuery, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
        this.search$ = params['search'];
        this.searchControl.setValue(params['search'])
      });   
    this.booksFacade.getAllBooks().subscribe();
  }
}
