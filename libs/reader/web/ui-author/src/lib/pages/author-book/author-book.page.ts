import { switchMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, OnInit, ChangeDetectorRef, Directive } from '@angular/core';
import { BooksFacade, ListBooksFacade } from '@awread/core/books';
import { AuthorFacade } from '@awread/core/authors';
import { Observable } from 'rxjs';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class AuthorBookPage implements OnInit {
  userId: string;
  user: any;
  breadcrumbs;
  totalBook$: any;
  authorBooks$;
  isLoading$: Observable<boolean>;
  hasNextPage$: Observable<boolean>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorFacade: AuthorFacade,
    private booksFacade: BooksFacade,
    private listBooksFacade: ListBooksFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('userId')),
      switchMap(id => this.authorFacade.getDetailAuthor(id)),
      tap(user => this.listBooksFacade.getAuthorBookByCursor(user.userId, 'add').pipe(untilDestroyed(this)).subscribe())
    ).subscribe(user => {
      this.user = user;
      this.breadcrumbs = this.getbreadcrumbs();
    })
    this.authorBooks$ = this.booksFacade.authorBooksQuery.selectAll();
    this.totalBook$ = this.booksFacade.authorBooksQuery.selectTotalBook();
    this.isLoading$ = this.booksFacade.authorBooksQuery.selectLoading();
    this.hasNextPage$ = this.booksFacade.authorBooksQuery.selectHasNextPage();
  }

  getbreadcrumbs() {
    return [{
      title: 'Home',
      link: ['/']
    },
    {
      title: 'Tác giả',
      link: ['/', this.user.userId]
    },
    {
      title: this.user.name,
      link: ['/', this.user.userId]
    }
    ];
  }

  moreBooks() {
    this.fetchBooks();
  }

  private fetchBooks() {
    if (this.booksFacade.authorBooksQuery.getHasNextPage()) {
      this.listBooksFacade.getAuthorBookByCursor(this.userId, 'add').pipe(untilDestroyed(this)).subscribe();
    }
  }

}
