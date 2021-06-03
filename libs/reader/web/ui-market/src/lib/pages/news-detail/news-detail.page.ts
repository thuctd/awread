import { NewsFacade } from '@awread/core/news';
import { map, switchMap, takeWhile } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, OnInit, Directive } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class NewsDetailPage implements OnInit {
  news$ = this.newsFacade.news$;
  newsDetail: Observable<any>;
  blogId: string;
  constructor(private activatedRoute: ActivatedRoute, private newsFacade: NewsFacade) {}

  ngOnInit(): void {
    this.newsFacade.get().subscribe();
    this.blogId = this.activatedRoute.snapshot.params['newsId'];
    this.loadBlogId();
  }

  private loadBlogId() {
    this.newsDetail = this.news$.pipe(
      takeWhile((val) => val !== undefined && this.blogId !== undefined, false),
      switchMap((items) => {
        if (!items.length) {
          return of([]);
        }
        return this.newsFacade.selectEntity(this.blogId);
      })
    );
  }
}
