import { CreationsFacade } from '@awread/core/creations';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CurrentUserFacade, AuthFacade } from '@awread/core/users';
import { Directive, Injectable, OnInit } from '@angular/core';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ShellLayout implements OnInit {
  isLogin: boolean;
  currentUser$ = this.currentUserFacade.currentUser$;
  searchControl: FormControl = new FormControl("");

  constructor(
    private currentUserFacade: CurrentUserFacade,
    private creationsFacade: CreationsFacade,
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((term) => {
        this.creationsFacade.updateSearchTerm(term);
      });
  }
  searchEvent(term: string) { }

  logout() {
    this.authFacade.logout();
  }
}
