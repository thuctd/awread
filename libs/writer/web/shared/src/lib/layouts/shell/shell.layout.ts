import { CreationsFacade } from '@awread/core/creations';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CurrentUserFacade, AuthFacade } from '@awread/core/users';
import { Directive, Injectable, OnInit } from '@angular/core';
import { GenresFacade } from '@awread/core/genres';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ShellLayout implements OnInit {
  isLogin: boolean;
  currentUser$ = this.currentUserFacade.currentUser$;
  searchControl: FormControl = new FormControl('');

  routes = [
    // {
    //   name: 'dashboard',
    //   iconUrl: '/global-assets/images/Dashboard.webp',
    //   linkTo: '/dashboard',
    // },
    {
      name: 'user',
      iconUrl: '/global-assets/images/user.webp',
      iconUrl2: '/global-assets/images/user-2.webp',
      linkTo: '/profile',
    },
    {
      name: 'books',
      iconUrl: '/global-assets/images/books.webp',
      iconUrl2: '/global-assets/images/books-2.webp',
      linkTo: '/',
    },
  ];

  constructor(
    private currentUserFacade: CurrentUserFacade,
    private authFacade: AuthFacade,
    private genresFacade: GenresFacade,
    private creationsFacade: CreationsFacade
  ) {}

  ngOnInit(): void {
    this.genresFacade.getAllGenres().subscribe();
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((term) => {
        this.creationsFacade.updateSearchTerm(term);
      });
  }
  searchEvent(term: string) {}

  logout() {
    this.authFacade.logout();
  }
}
