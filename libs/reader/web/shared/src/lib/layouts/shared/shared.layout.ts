import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Directive, Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith, switchMap, map } from 'rxjs/operators';
import { BooksFacade } from '@awread/core/books';
import { AuthFacade, CurrentUserFacade } from '@awread/core/users';
import { domainEnvironment, environment } from '@awread/global/environments';
import { GenresFacade } from '@awread/core/genres';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class SharedLayout implements OnInit {
  isLogin$ = this.authFacade.isLogin$;
  user$ = this.currentUserFacade.currentUser$;
  searchControl: FormControl = new FormControl('');
  search$;
  results$;
  background = environment.next ? 'linear-gradient(145deg,#dd0031,#c3002f)' : '';
  get hasSearchTermInput(): boolean {
    return !!this.searchControl.value;
  }

  constructor(
    private router: Router,
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef,
    private authFacade: AuthFacade,
    private currentUserFacade: CurrentUserFacade,
    private genresFacade: GenresFacade
  ) {
    console.log('backgound', this.background, environment, domainEnvironment);
  }

  ngOnInit(): void {
    this.genresFacade.getAllGenres().subscribe();
    this.searchControl.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((term) => {
        this.search$ = term;
      });
    this.watchingSearchTerm();
    this.currentUserFacade.getCurrentUser().subscribe();
  }

  logout() {
    this.authFacade.logout('/');
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
