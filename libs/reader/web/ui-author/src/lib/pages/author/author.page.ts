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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorFacade: AuthorFacade,
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('userId')),
      switchMap(id => this.authorFacade.getDetailAuthor(id)),
      tap(author => this.booksFacade.getAuthorBooks(author[0].userId).subscribe())
    ).subscribe(users => {
      this.user = users[0];
      this.breadcrumbs = this.getbreadcrumbs()
    })
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

  onMoreBooksByAuthor() {
    this.router.navigate([this.userId, 'books']);
  }
}
