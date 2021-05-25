import { NewsFacade } from '@awread/core/news';
import { Directive, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class NewsPage {
  news$ = this.newsFacade.news$;
  // bienNewThuong = [];
  constructor(private newsFacade: NewsFacade) {}

  ngOnInit(): void {
    this.newsFacade.get().subscribe((data) => {
      console.log('Apidata', data);
    });

    // this.news$.subscribe((value) => {
    //   console.log('localData', value);
    //   this.bienNewThuong = value;
    // });
  }
}
