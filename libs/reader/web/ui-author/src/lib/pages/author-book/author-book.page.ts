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
      tap(author => this.listBooksFacade.getAuthorBookByCursor(author[0].userId, 'add').pipe(untilDestroyed(this)).subscribe())
    ).subscribe(users => {
      this.user = users[0];
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
      title: this.user.userByUserId.name,
      link: ['/', this.user.userId]
    }
    ];
  }

  onMoreBooks() {
    this.fetchBooks();
  }

  private fetchBooks() {
    if (this.booksFacade.authorBooksQuery.gethasNextPage()) {
      this.booksFacade.getAuthorBooks(this.userId).subscribe();
    }
  }

}
