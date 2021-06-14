import { UntilDestroy } from '@ngneat/until-destroy';
import { NewsFacade } from '@awread/core/news';
import { ActivatedRoute } from '@angular/router';
import { Injectable, OnInit, Directive, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class NewsDetailPage implements OnInit {
  news$ = this.newsFacade.news$;
  content$: Observable<any>;
  newsDetail$: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, private newsFacade: NewsFacade, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.newsFacade.newsQuery.getCount() == 0) {
      this.newsFacade.getAllNews().subscribe();
    }
    this.activatedRoute.params.subscribe((params) => {
      this.getDetail(params['newsId']);
    });
  }

  getDetail(id) {
    this.content$ = this.newsFacade.getContentNews(id);
    this.newsDetail$ = this.newsFacade.selectEntity(id);
  }
}
