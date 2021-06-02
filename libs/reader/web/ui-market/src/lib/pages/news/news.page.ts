import { News, NewsFacade } from '@awread/core/news';
import { Directive, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class NewsPage {
  news$ = this.newsFacade.news$;
  newsDetail$ = this.newsFacade.newsDetail$;
  // bienNewThuong = [];
  constructor(private newsFacade: NewsFacade) {}

  ngOnInit(): void {
    this.newsFacade.get().subscribe((data) => {});
    // this.news$.subscribe((value) => {
    //   console.log('localData', value);
    //   this.bienNewThuong = value;
    // });
  }
}
