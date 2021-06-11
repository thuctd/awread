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
export class NewsDetailPage implements OnInit {
  news$ = this.newsFacade.news$;
  content$: Observable<any>;
  newsDetail$: Observable<any>;
  newsId: string;
  constructor(private activatedRoute: ActivatedRoute, private newsFacade: NewsFacade, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadNewsId();
    this.newsFacade.getAllNews().subscribe();
    this.getDetail();
  }

  getDetail() {
    this.newsDetail$ = this.newsFacade.selectEntity(this.newsId);
    this.newsDetail$.subscribe();
  }

  loadNewsId() {
    this.newsId = this.activatedRoute.snapshot.params['newsId'];
    this.content$ = this.newsFacade.getContentNews(this.newsId);
    this.content$.subscribe();
  }
}
