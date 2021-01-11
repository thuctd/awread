import { CurrentUserFacade, AuthFacade } from '@awread/writer/web/feature-auth';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ShellLayout implements OnInit {
  isLogin: boolean;
  currentUser$ = this.currentUserFacade.currentUser$;
  constructor(
    private currentUserFacade: CurrentUserFacade,
    private authFacade: AuthFacade
  ) {}

  ngOnInit(): void {}
  searchEvent(term: string) {}

  logout() {
    this.authFacade.logout();
  }
}
