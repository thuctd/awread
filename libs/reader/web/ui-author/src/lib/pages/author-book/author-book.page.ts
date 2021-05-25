import { switchMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, OnInit, ChangeDetectorRef, Directive } from '@angular/core';
import { BooksFacade } from '@awread/core/books';
import { AuthorFacade } from '@awread/core/authors';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class AuthorBookPage implements OnInit {
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
      this.breadcrumbs = this.getbreadcrumbs();
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
}
