import { FormControl } from '@angular/forms';
import { BooksFacade } from '@awread/reader/web/feature-market';
import { Directive, Injectable, OnInit } from '@angular/core';
import { Book } from '../models';
import { BooksQuery } from '../states/books';
import { combineLatest, debounceTime, switchMap } from 'rxjs/operators';
import { untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class SearchPage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  searchControl: FormControl = new FormControl('');
  results$: Observable<Book[]>;

  constructor(private booksFacade: BooksFacade, private booksQuery: BooksQuery) { }

  ngOnInit(): void {
    const search$ = this.searchControl.valueChanges.pipe(debounceTime(50));
    // this.results$ = combineLatest([search$, this.booksQuery.bookList$]).pipe(
    //   untilDestroyed(this),
    //   switchMap(([term, issues]) => {
    //     const matchIssues = issues.filter((issue) => {
    //       // const foundInTitle = IssueUtil.searchString(issue.title, term);
    //       // const foundInDescription = IssueUtil.searchString(issue.description, term);
    //       return [];
    //     });
    //     return of(matchIssues);
    //   })
    // );
    this.booksFacade.getAllBooks().subscribe();
  }
}
