import { UntilDestroy } from '@ngneat/until-destroy';
import { NewsFacade } from '@awread/core/news';
import { map, switchMap, takeWhile, tap, takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, OnInit, Directive, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class NewsDetailPage implements OnInit, OnDestroy {
  news$ = this.newsFacade.news$;
  newsDetail: Observable<any>;
  destroy$ = new Subject();
  blogId: string;
  constructor(private activatedRoute: ActivatedRoute, private newsFacade: NewsFacade, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.blogId = this.activatedRoute.snapshot.params['newsId'];
    this.loadBlogId();
    this.newsFacade.get().subscribe();
  }

  loadBlogId() {
    this.newsDetail = this.news$.pipe(
      takeWhile((val) => val !== undefined && this.blogId !== undefined, false),
      takeUntil(this.destroy$),
      switchMap((items) => {
        if (!items.length) {
          return of([]);
        }
        return this.newsFacade.selectEntity(this.blogId);
      })
    );
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
