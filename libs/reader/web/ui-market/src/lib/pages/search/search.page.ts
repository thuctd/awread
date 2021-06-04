import { tap } from 'rxjs/operators';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { FormControl } from '@angular/forms';
import { ChangeDetectorRef, Directive, Injectable, OnInit } from '@angular/core';
import { debounceTime, map, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BooksFacade } from '@awread/core/books';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class SearchPage implements OnInit {
  searchControl: FormControl = new FormControl();
  isLoading$: Observable<boolean>;
  results$;

  constructor(
    private booksFacade: BooksFacade,
    private router: Router,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.syncUrlSearchText();
    this.watchingSearchTerm();
    this.isLoading$ = this.booksFacade.searchBooksQuery.selectLoading();
  }

  bindingUrlSeach(term: string) {
    this.router.navigate(['/search'], { queryParams: { search: term } });
  }

  syncUrlSearchText() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const searchTerm: string = params['search'];
      this.searchControl.setValue(searchTerm ?? '');
    });
  }

  watchingSearchTerm() {
    this.results$ = this.activatedRoute.queryParams.pipe(
      untilDestroyed(this),
      map(query => query.search),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.booksFacade.searchBookApi(term).pipe(tap(res => console.log(res)))),
    );
    this.cd.detectChanges();
  }
}
