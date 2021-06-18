import { map, switchMap, tap } from 'rxjs/operators';
import { AuthorFacade } from '@awread/core/authors';
import { Router, ActivatedRoute } from '@angular/router';
import { Directive, Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { BooksFacade } from '@awread/core/books';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class AuthorPage implements OnInit {
  userId: string;
  user: any;
  authorBooks = this.booksFacade.authorBooks$;
  breadcrumbs;
  totalBook$: any;
  notFound = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorFacade: AuthorFacade,
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.totalBook$ = this.booksFacade.authorBooksQuery.selectTotalBook();
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('userId')),
        switchMap((id) => this.authorFacade.getDetailAuthor(id)),
        tap((user) => this.booksFacade.getAuthorBooks(user.userId).subscribe())
      )
      .subscribe((user) => {
        this.user = user;
        this.breadcrumbs = this.getbreadcrumbs();
      }, error => {
        console.warn('error', error);
        this.notFound = true;

      });
  }

  getbreadcrumbs() {
    return [
      {
        title: 'Home',
        link: ['/'],
      },
      {
        title: 'Tác giả',
        link: ['/', this.user.userId],
      },
      {
        title: this.user.name,
        link: ['/', this.user.userId],
      },
    ];
  }

  navigateBooksByAuthor() {
    this.router.navigate([this.userId, 'books']);
  }
}
