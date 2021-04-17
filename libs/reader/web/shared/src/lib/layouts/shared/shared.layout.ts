import { Book, BooksFacade } from '@awread/reader/web/feature-market';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Directive, Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith, switchMap, map } from 'rxjs/operators';
@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class SharedLayout implements OnInit {
  searchControl: FormControl = new FormControl('');
  search$;
  results$;

  get hasSearchTermInput(): boolean {
    return !!this.searchControl.value;
  }

  constructor(private router: Router, private booksFacade: BooksFacade, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((term) => {
        this.search$ = term
      });
    this.watchingSearchTerm();
  }

  watchingSearchTerm() {
    this.results$ = this.searchControl.valueChanges.pipe(
      untilDestroyed(this),
      debounceTime(50),
      startWith(''),
      switchMap((term: string) => this.booksFacade.searchBookApi(term))
    );
    this.cd.detectChanges();
  }

  navigateToSearch() {
    if (!this.searchControl.value) {
      return false;
    }
    this.router.navigate(['/search'], { queryParams: { search: this.search$ } });
  }
}

