import { CurrentUserFacade, AuthFacade } from '@awread/core/users';
import { Directive, Injectable, OnInit } from '@angular/core';
import { GenresFacade } from '@awread/core/genres';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ShellLayout implements OnInit {
  isLogin: boolean;
  currentUser$ = this.currentUserFacade.currentUser$;
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
    private genresFacade: GenresFacade
  ) {}

  ngOnInit(): void {
    this.genresFacade.getAllGenres().subscribe();
  }
  searchEvent(term: string) {}

  logout() {
    this.authFacade.logout();
  }
}
